import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      navBg: string;
      navIcons: string;
      logo: string;
      text: string;
      btnBg: string;
    };
  }
}
