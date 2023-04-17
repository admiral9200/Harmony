import client from "@/apollo";
import { ACTIVATE_USER } from "@/apollo/mutate/user";
import { QUERY_USER_BYID } from "@/apollo/query/user";
import { IMutationFilter, IQueryFilter } from "@/types";
import UnicodeDecodeB64 from "@/utils/unicodeStringB64";
import { AtomButton, AtomIcon, AtomText, AtomWrapper } from "lucy-nxtjs";
import { NextPageContext, NextPageWithProps } from "next";
import { useRouter } from "next/router";

const SucessFullAccountCreated: NextPageWithProps<{
  user: IQueryFilter<"userById">["userById"];
}> = (props) => {
  const data = props?.user;

  const router = useRouter();

  return (
    <AtomWrapper
      justifyContent="center"
      alignItems="center"
      customCSS={(css) => css`
        height: 100%;
        gap: 15px;
      `}
    >
      <AtomIcon
        height="100px"
        width="100px"
        color="#8679ec"
        src="https://res.cloudinary.com/whil/image/upload/v1681690426/app/harmony/SVGNORMALIZE_xjjlpj.svg"
      />
      <AtomText fontSize="29px" fontWeight="bold">
        Harmony - Account created successfully.
      </AtomText>
      <AtomWrapper height="auto" width="auto" alignItems="center" gap="5px">
        <AtomText fontSize="18px">
          Thank You <strong>{data?.name}</strong>
        </AtomText>
        <AtomText fontSize="16px">
          Your account <strong>{data?.email}</strong> was activated successfully
        </AtomText>
      </AtomWrapper>
      <AtomButton
        backgroundColor="#8679ec"
        onClick={() => router.push("/login")}
      >
        Go to login
      </AtomButton>
    </AtomWrapper>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const userIdWithoutDecode = context?.query?.id as string;
  const userId = UnicodeDecodeB64(userIdWithoutDecode ?? "");
  const user = await client.query<IQueryFilter<"userById">>({
    query: QUERY_USER_BYID,
    variables: {
      filter: {
        id: userId,
      },
    },
  });

  await client.mutate<IMutationFilter<"activeUser">>({
    mutation: ACTIVATE_USER,
    variables: {
      input: {
        id: userIdWithoutDecode,
      },
    },
  });

  return {
    props: {
      user: user.data.userById,
    },
  };
}

export default SucessFullAccountCreated;
