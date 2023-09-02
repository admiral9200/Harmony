const icons = {
  cursor: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17.2637 13.0216L14.53 13.9368C13.7715 14.1893 13.1868 14.7731 12.934 15.5305L12.0175 18.2602C11.2432 20.6112 7.92483 20.5639 7.19802 18.2129L4.11668 8.30375C3.51621 6.33139 5.33341 4.51684 7.27703 5.11644L17.2163 8.19328C19.5707 8.9349 19.6023 12.2485 17.2637 13.0216Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  box: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  frame: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
  circle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> `,
  line: `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<line x1="0.646447" y1="13.6464" x2="13.6464" y2="0.646446" stroke="white"/>
</svg>
  `,
  image: `
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
<path d="M12.5 1H2.5C1.67157 1 1 1.67157 1 2.5V10.5C1 11.3284 1.67157 12 2.5 12H12.5C13.3284 12 14 11.3284 14 10.5V2.5C14 1.67157 13.3284 1 12.5 1Z" stroke="white" stroke-linejoin="round"/>
<path d="M10 5C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4C9 4.55228 9.44772 5 10 5Z" stroke="white" stroke-miterlimit="10"/>
<path d="M9 9.05585L6.16687 6.28674C5.98659 6.11024 5.74428 6.00782 5.48947 6.00043C5.23465 5.99304 4.98657 6.08122 4.79594 6.24695L1 9.5519M6.5 12L10.3544 8.22563C10.5306 8.05268 10.7666 7.9505 11.0158 7.93918C11.2651 7.92785 11.5097 8.0082 11.7016 8.16443L14 10.0415" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
  text: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M2.66992 7.17003V5.35003C2.66992 4.20003 3.59992 3.28003 4.73992 3.28003H19.2599C20.4099 3.28003 21.3299 4.21003 21.3299 5.35003V7.17003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20.7201V4.11011" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.06006 20.72H15.9401" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  peentool: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7H15" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 7H5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7.72998C17.37 8.92998 19 11.51 19 14.5C19 14.67 18.99 14.83 18.97 15" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M5 12L9.32824 17L18 7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  grid_center: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
  add: `
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 8.12402H8.125V11.874H6.875V8.12402H3.125V6.87402H6.875V3.12402H8.125V6.87402H11.875V8.12402Z" fill="white"/>
</svg>

  `,
  group: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 6.95V17.05C19.84 17.02 19.67 17 19.5 17C18.12 17 17 18.12 17 19.5C17 19.67 17.02 19.84 17.05 20H6.95C6.98 19.84 7 19.67 7 19.5C7 18.12 5.88 17 4.5 17C4.33 17 4.16 17.02 4 17.05V6.95C4.16 6.98 4.33 7 4.5 7C5.88 7 7 5.88 7 4.5C7 4.33 6.98 4.16 6.95 4H17.05C17.02 4.16 17 4.33 17 4.5C17 5.88 18.12 7 19.5 7C19.67 7 19.84 6.98 20 6.95Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 4.5C7 5.88 5.88 7 4.5 7C4.33 7 4.16 6.98 4 6.95C2.86 6.72 2 5.71 2 4.5C2 3.12 3.12 2 4.5 2C5.71 2 6.72 2.86 6.95 4C6.98 4.16 7 4.33 7 4.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 4.5C22 5.71 21.14 6.72 20 6.95C19.84 6.98 19.67 7 19.5 7C18.12 7 17 5.88 17 4.5C17 4.33 17.02 4.16 17.05 4C17.28 2.86 18.29 2 19.5 2C20.88 2 22 3.12 22 4.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19.5C7 19.67 6.98 19.84 6.95 20C6.72 21.14 5.71 22 4.5 22C3.12 22 2 20.88 2 19.5C2 18.29 2.86 17.28 4 17.05C4.16 17.02 4.33 17 4.5 17C5.88 17 7 18.12 7 19.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 19.5C22 20.88 20.88 22 19.5 22C18.29 22 17.28 21.14 17.05 20C17.02 19.84 17 19.67 17 19.5C17 18.12 18.12 17 19.5 17C19.67 17 19.84 17.02 20 17.05C21.14 17.28 22 18.29 22 19.5Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
  code: `
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4976 5.87947C19.7618 5.95007 19.9871 6.1227 20.124 6.35941C20.2609 6.59612 20.2982 6.87752 20.2277 7.14172L14.7648 27.533C14.6939 27.7974 14.5208 28.0227 14.2837 28.1595C14.0466 28.2963 13.7649 28.3333 13.5005 28.2624C13.2361 28.1915 13.0107 28.0184 12.8739 27.7813C12.7372 27.5442 12.7001 27.2625 12.7711 26.9981L18.2353 6.60684C18.2704 6.47601 18.331 6.35337 18.4135 6.24593C18.496 6.13849 18.5988 6.04836 18.7162 5.98069C18.8335 5.91301 18.963 5.86912 19.0974 5.85152C19.2317 5.83391 19.3681 5.84295 19.499 5.87809L19.4976 5.87947ZM22.6078 10.076C22.6984 9.97512 22.808 9.89312 22.9303 9.83466C23.0526 9.7762 23.1852 9.74243 23.3206 9.73528C23.456 9.72813 23.5914 9.74774 23.7192 9.79299C23.847 9.83823 23.9646 9.90823 24.0653 9.99897L26.4537 12.1495C27.4671 13.0597 28.3058 13.816 28.8833 14.5007C29.4883 15.2226 29.9201 15.9967 29.9201 16.9537C29.9201 17.9093 29.4897 18.6835 28.8833 19.404C28.3058 20.0901 27.4671 20.8463 26.4537 21.7566L24.0653 23.9071C23.862 24.0902 23.5943 24.185 23.3211 24.1707C23.0479 24.1563 22.7916 24.0341 22.6085 23.8308C22.4254 23.6275 22.3306 23.3598 22.345 23.0866C22.3593 22.8134 22.4815 22.557 22.6848 22.374L25.0182 20.2743C26.1017 19.2995 26.8318 18.6381 27.3048 18.0771C27.7586 17.5367 27.8576 17.2218 27.8576 16.9523C27.8576 16.6842 27.7586 16.3693 27.3048 15.829C26.8318 15.2666 26.1017 14.6052 25.0182 13.6317L22.6848 11.5321C22.584 11.4415 22.502 11.3319 22.4435 11.2096C22.3851 11.0873 22.3513 10.9547 22.3441 10.8193C22.337 10.6839 22.3566 10.5485 22.4018 10.4207C22.4471 10.2929 22.5171 10.1767 22.6078 10.076ZM10.3153 11.5321C10.416 11.4414 10.4978 11.3319 10.5561 11.2096C10.6145 11.0873 10.6481 10.9548 10.6552 10.8195C10.6623 10.6842 10.6427 10.5489 10.5974 10.4212C10.5522 10.2935 10.4823 10.1759 10.3916 10.0753C10.301 9.97462 10.1914 9.89279 10.0691 9.83447C9.94687 9.77616 9.81432 9.7425 9.67904 9.73541C9.54376 9.72832 9.40841 9.74795 9.28072 9.79317C9.15303 9.8384 9.0355 9.90832 8.93483 9.99897L6.54645 12.1495C5.53308 13.0597 4.69433 13.816 4.11683 14.5007C3.51183 15.2226 3.08008 15.9967 3.08008 16.9537C3.08008 17.9093 3.51045 18.6835 4.11683 19.404C4.69433 20.0901 5.53308 20.8463 6.54645 21.7566L8.93483 23.9071C9.13813 24.0902 9.40583 24.185 9.67904 24.1707C9.95225 24.1563 10.2086 24.0341 10.3916 23.8308C10.5747 23.6275 10.6695 23.3598 10.6552 23.0866C10.6409 22.8134 10.5186 22.557 10.3153 22.374L7.98195 20.2743C6.89845 19.2995 6.16833 18.6381 5.69533 18.0771C5.24158 17.5367 5.14258 17.2218 5.14258 16.9523C5.14258 16.6842 5.24158 16.3693 5.69533 15.829C6.16833 15.2666 6.89845 14.6052 7.98195 13.6317L10.3153 11.5321Z" fill="black"/>
</svg>

  `,
};

export default icons;
