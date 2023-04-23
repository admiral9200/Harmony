import { AtomButton, AtomText, AtomWrapper } from "lucy-nxtjs";
import { NextReadPage } from "next";
import { useRouter } from "next/router";

const PageIndexHome: NextReadPage = () => {
  const router = useRouter();
  return (
    <AtomWrapper
      backgroundColor="#202020"
      customCSS={(css) => css`
        justify-content: flex-start;
      `}
    >
      <AtomWrapper
        height="auto"
        customCSS={(css) => css`
          height: 50px;
          padding: 2rem;
          background-color: #79ecd7;
        `}
      >
        <AtomText fontWeight="bold">Recently viewed</AtomText>
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          padding: 2rem;
          height: auto;
        `}
      >
        <AtomButton
          onClick={() => {
            router.push("/editor");
          }}
          customCSS={(css) => css`
            height: auto;
            width: 200px;
            border-radius: 10px;
            gap: 0.5em;
            background-color: #8679ec;
            align-items: center;
            padding: 10px 5px;
            border: 1px solid white;
            justify-content: center;
          `}
        >
          <AtomText
            customCSS={(css) => css`
              border-radius: 10px;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5em;
              font-size: 16px;
              font-weight: 600;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            `}
            color="white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#8679ec"
            >
              <path
                d="M21.19 8.0399L18.01 4.85991C16.81 3.65991 15.16 3.71993 14.35 5.00993L12.58 7.80992L18.25 13.4799L21.05 11.7099C22.26 10.9399 22.33 9.1699 21.19 8.0399Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.25 13.47L18.49 17.59C18.72 19.89 17.92 20.69 15.74 20.95L7.02 21.98C5.18 22.19 3.86 20.87 4.08 19.04L5.06 10.76"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.58 7.80994L10.83 7.69995"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.28 20.7799L8.46001 17.5898"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.52 8.18005V4.82007"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.16 6.5H4.8"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            New design file
          </AtomText>
        </AtomButton>
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 1.5rem;
          flex-wrap: wrap;
          align-items: flex-end;
          align-content: flex-start;
          padding: 1.5rem;
          height: 100%;
          overflow: none;
          overflow-y: scroll;
          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 99px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #8679ec;

            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
          }
        `}
      >
        {Array.from({ length: 50 }, (_, index) => index + 1).map((item) => (
          <AtomWrapper
            key={item}
            customCSS={(css) => css`
              background-color: #1a1a1a;
              max-width: 290px;
              border-radius: 10px;
              max-height: 290px;
              border-radius: 10px;
            `}
          >
            <AtomWrapper alignItems="center" justifyContent="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 217 216"
                fill="none"
              >
                <path
                  d="M159.277 10.9333L148.744 21.9999L130.077 27.4666L111.41 32.9333L107.944 48.1333C105.944 56.5333 101.277 76.9333 97.2771 93.7333C93.0104 112.4 90.7437 124.533 91.5437 125.333C92.2104 126 110.21 122.4 137.41 116C161.944 110.133 182.477 105.333 182.877 105.333C183.277 105.333 186.21 96.2666 189.41 85.3333C192.61 74.2666 195.81 65.3333 196.61 65.3333C198.477 65.3333 216.077 47.7333 216.077 45.8666C216.077 44.5333 171.81 -5.7629e-05 170.61 -5.7629e-05C170.21 -5.7629e-05 165.144 4.93328 159.277 10.9333ZM202.61 51.7333C199.544 54.7999 196.744 57.3333 196.21 57.3333C195.81 57.3333 187.01 48.9333 176.744 38.6666L158.21 19.9999L164.077 13.9999L170.077 7.99994L189.144 27.0666L208.21 46.1333L202.61 51.7333ZM172.744 43.8666C181.944 52.9333 189.41 61.0666 189.41 61.8666C189.277 62.6666 187.01 71.4666 184.21 81.3333C179.81 96.9333 178.61 99.4666 175.944 100.4C172.877 101.333 113.277 115.6 106.744 116.933C104.344 117.467 108.61 112.4 123.144 97.7333L142.877 77.8666H150.21C156.744 77.9999 158.077 77.5999 160.877 74.2666C167.144 67.0666 162.877 54.7999 153.41 52.6666C144.744 50.7999 135.544 60.7999 138.477 69.0666C139.81 72.9333 139.41 73.3333 119.944 92.7999C109.01 103.733 100.077 111.867 100.077 111.067C100.077 108.133 116.344 39.3333 117.144 38.3999C117.677 37.8666 125.544 35.3333 134.744 32.6666C143.944 29.9999 151.677 27.4666 152.077 27.1999C153.544 25.5999 157.144 28.5333 172.744 43.8666ZM155.81 60.2666C156.744 61.1999 157.41 63.4666 157.41 65.3333C157.41 67.1999 156.744 69.4666 155.81 70.3999C154.877 71.3333 152.61 71.9999 150.744 71.9999C146.477 71.9999 144.077 69.7333 144.077 65.8666C144.077 59.9999 151.81 56.2666 155.81 60.2666Z"
                  fill="gray"
                />
                <path
                  d="M71.0105 33.7333C63.8105 41.0667 62.7439 43.6 66.0772 44.8C69.0105 46 68.4772 49.0667 64.6105 53.6C53.0105 67.6 47.6772 93.0667 52.6105 112C53.6772 116 54.3439 119.467 54.0772 119.733C53.9439 120 46.6105 112.8 37.9439 103.867C23.0105 88.6667 22.0772 87.4667 22.4772 82.9333C22.7439 77.6 21.1439 74.6667 16.4772 72.2667C12.0772 69.8667 8.61053 70.4 4.21053 74.1333C-1.12281 78.5333 -1.38947 84.6667 3.41053 89.8667C6.21053 92.9333 7.81053 93.4667 12.0772 93.0667C17.1439 92.6667 17.5439 92.9333 40.0772 115.2L62.7439 137.867L60.0772 140.667C58.6105 142.267 57.4105 144.133 57.4105 144.8C57.4105 145.467 60.7439 149.2 64.8772 153.067L72.3439 160.133L75.2772 157.467C76.8772 155.867 78.4772 154.667 78.8772 154.667C79.2772 154.667 89.5439 164.667 101.811 176.933C123.411 198.533 124.077 199.467 124.077 204.667C124.077 211.467 128.211 216 134.344 216C140.344 216 142.611 214.8 144.877 210.4C149.144 202.133 144.077 194.667 134.211 194.667C129.277 194.667 127.811 193.733 113.544 179.6C105.011 171.467 97.8105 164.133 97.5438 163.467C97.2772 162.8 98.4772 162.667 100.211 163.2C101.944 163.733 107.277 164.8 111.811 165.6C127.677 168.4 148.611 162.933 162.611 152.133C167.411 148.533 169.011 148 170.611 149.2C171.811 150 173.544 151.067 174.477 151.467C177.011 152.667 191.144 138.533 189.944 135.867C189.544 134.933 185.811 131.067 181.811 127.467L174.611 120.8L167.411 128C163.411 132 160.077 135.867 160.077 136.533C160.077 137.2 161.144 138.933 162.344 140.4C164.611 142.8 164.611 143.067 161.411 145.6C141.677 161.6 113.811 164.267 90.6105 152.533C83.9439 149.2 83.9439 149.067 86.2105 146.533C88.4772 144 88.3439 143.733 81.0105 136.267C73.9439 129.2 73.1439 128.8 70.4772 130.533C66.8772 132.8 65.4105 131.067 61.4105 120.267C53.4105 98.9333 56.8772 73.8667 70.3439 56.2667L73.6772 51.8667L76.2105 54.5333C77.6772 56.1333 79.2772 57.3333 79.8105 57.3333C81.2772 57.3333 94.7439 43.4667 94.7439 41.8667C94.7439 40.1333 81.0105 26.6667 79.2772 26.6667C78.6105 26.6667 74.8772 29.8667 71.0105 33.7333ZM84.0772 38L87.2772 41.3333L83.4105 45.3333L79.5439 49.3333L75.8105 45.7333L72.0772 42.1333L75.6772 38.4C77.6772 36.4 79.6772 34.6667 80.0772 34.6667C80.6105 34.6667 82.3439 36.1333 84.0772 38ZM15.8105 81.4667C16.3439 86 13.1439 88.6667 9.54386 86.6667C6.87719 85.3333 5.67719 80.1333 7.67719 78.1333C8.21053 77.6 10.2105 77.3333 12.0772 77.6C14.6105 77.8667 15.5439 78.9333 15.8105 81.4667ZM179.144 133.067L182.744 136.8L178.744 140.667L174.744 144.533L171.411 141.333C167.277 137.467 167.277 136.933 171.144 132.8C175.011 128.667 175.011 128.667 179.144 133.067ZM77.4105 140.667L80.6105 144.133L76.6105 148.133L72.6105 152L68.7439 148L64.8772 144L68.0772 140.667C71.9439 136.533 73.5439 136.533 77.4105 140.667ZM138.477 201.6C142.211 205.333 138.611 211.6 133.544 210C132.077 209.6 130.477 208 130.077 206.533C128.477 201.467 134.744 197.867 138.477 201.6Z"
                  fill="gray"
                />
              </svg>
            </AtomWrapper>
            <AtomWrapper
              height="auto"
              backgroundColor="#2e2e2e"
              padding="1em"
              borderRadius="0px 0px 10px 10px"
            >
              <AtomText color="white">Design file {item}</AtomText>
              <AtomText color="white">
                {new Date()?.toLocaleDateString("es", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }) ?? ""}
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};
PageIndexHome.Layout = "public";
export default PageIndexHome;
