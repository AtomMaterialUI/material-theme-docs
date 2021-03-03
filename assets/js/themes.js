document.addEventListener('DOMContentLoaded', () => {
  let s = document.getElementById('themes');
  if (s) {
    s.remove();
  }

  // Insert a style tag into the wrapper view
  s = document.createElement('style');
  s.type = 'text/css';
  s.innerHTML = `
.theme-oceanic {
  --primary: #ffcb6b;
  --accent: #009688;
  --accent2: #c792ea;
  --background: #263238;
  --foreground: #B0BEC5;
  --text: #607D8B;
  --selectBg: #546E7A;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #2E3C43;
  --second: #32424A;
  --disabled: #415967;
  --contrast: #1E272C;
  --active: #314549;
  --border: #2A373E;
  --hl: #425B67;
  --tree: #546E7A70;
  --notif: #1E272C;
  --excluded: #2E3C43;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #546e7a;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #546e7a;
  --silver: undefined;

  --laptop: url('../../img/themes/oceanic.png');
  --logo: url('../../img/logo/material-oceanic.svg');
}

.theme-darker {
  --primary: #ffcb6b;
  --accent: #FF9800;
  --accent2: #c792ea;
  --background: #212121;
  --foreground: #B0BEC5;
  --text: #727272;
  --selectBg: #404040;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #2A2A2A;
  --second: #292929;
  --disabled: #474747;
  --contrast: #1A1A1A;
  --active: #323232;
  --border: #292929;
  --hl: #3F3F3F;
  --tree: #323232C0;
  --notif: #1A1A1A;
  --excluded: #323232;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #616161;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #616161;
  --silver: undefined;

  --laptop: url('../../img/themes/darker.png');
  --logo: url('../../img/logo/material-darker.svg');
}

.theme-lighter {
  --primary: #F6A434;
  --accent: #00BCD4;
  --accent2: #7C4DFF;
  --background: #FAFAFA;
  --foreground: #546E7A;
  --text: #94A7B0;
  --selectBg: #80CBC440;
  --selectFg: #546e7a;
  --selectFg2: #272727;
  --accent-text: #272727;
  --button: #F3F4F5;
  --second: #FFFFFF;
  --disabled: #D2D4D5;
  --contrast: #EEEEEE;
  --active: #E7E7E8;
  --border: #d3e1e8;
  --hl: #E7E7E8;
  --tree: #80CBC440;
  --notif: #eae8e8;
  --excluded: #CCD7DA50;

  --attributes: #F6A434;
  --strings: #91B859;
  --operators: #39ADB5;
  --functions: #6182B8;
  --keywords: #7C4DFF;
  --tags: #E53935;
  --numbers: #F76D47;
  --comments: #AABFC9;
  --vars: #272727;
  --parameters: #F76D47;
  --links: #39ADB5;


  --yellow: #f6a434;
  --green: #91b859;
  --cyan: #39adb5;
  --blue: #6182b8;
  --purple: #7c4dff;
  --red: #e53935;
  --orange: #f76d47;
  --gray: #AABFC9;
  --silver: undefined;

  --laptop: url('../../img/themes/lighter.png');
  --logo: url('../../img/logo/material-lighter.svg');
}

.theme-palenight {
  --primary: #ffcb6b;
  --accent: #ab47bc;
  --accent2: #c792ea;
  --background: #292D3E;
  --foreground: #A6ACCD;
  --text: #676E95;
  --selectBg: #717CB470;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #303348;
  --second: #34324a;
  --disabled: #515772;
  --contrast: #202331;
  --active: #414863;
  --border: #2b2a3e;
  --hl: #444267;
  --tree: #676E95;
  --notif: #202331;
  --excluded: #2f2e43;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #676E95;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #676E95;
  --silver: undefined;

  --laptop: url('../../img/themes/palenight.png');
  --logo: url('../../img/logo/material-palenight.svg');
}

.theme-deepocean {
  --primary: #ffcb6b;
  --accent: #84ffff;
  --accent2: #c792ea;
  --background: #0F111A;
  --foreground: #8F93A2;
  --text: #4B526D;
  --selectBg: #717CB480;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #191A21;
  --second: #181A1F;
  --disabled: #464B5D;
  --contrast: #090B10;
  --active: #1A1C25;
  --border: #0F111A;
  --hl: #1F2233;
  --tree: #717CB430;
  --notif: #090B10;
  --excluded: #292D3E;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #717CB4;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #717CB4;
  --silver: undefined;

  --laptop: url('../../img/themes/deepocean.png');
  --logo: url('../../img/logo/material-deepocean.svg');
}

.theme-monokai {
  --primary: #78DCE8;
  --accent: #ffd866;
  --accent2: #FF6188;
  --background: #2D2A2E;
  --foreground: #fcfcfa;
  --text: #939293;
  --selectBg: #6E6C6F;
  --selectFg: #ffd866;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #403E41;
  --second: #403E41;
  --disabled: #5b595c;
  --contrast: #221F22;
  --active: #4A474B;
  --border: #2d2a2e;
  --hl: #5b595c;
  --tree: #403E41;
  --notif: #363437;
  --excluded: #3a3a3c;

  --attributes: #78DCE8;
  --strings: #FFD866;
  --operators: #FF6188;
  --functions: #A9DC76;
  --keywords: #FF6188;
  --tags: #FF6188;
  --numbers: #AB9DF2;
  --comments: #727072;
  --vars: #FCFCFA;
  --parameters: #F59762;
  --links: #78DCE8;


  --yellow: #ffd866;
  --green: #a9dc76;
  --cyan: #78dce8;
  --blue: #78dce8;
  --purple: #ab9df2;
  --red: #ff6188;
  --orange: #f59762;
  --gray: #727072;
  --silver: undefined;

  --laptop: url('../../img/themes/monokai.png');
  --logo: url('../../img/logo/material-monokai.svg');
}

.theme-dracula {
  --primary: #8aff80;
  --accent: #FF79C5;
  --accent2: #f780bf;
  --background: #282A36;
  --foreground: #F8F8F2;
  --text: #6272A4;
  --selectBg: #44475A;
  --selectFg: #8BE9FD;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #393C4B;
  --second: #282A36;
  --disabled: #6272A4;
  --contrast: #191A21;
  --active: #44475A;
  --border: #21222C;
  --hl: #6272A4;
  --tree: #44475A50;
  --notif: #1D2228;
  --excluded: #313341;

  --attributes: #8aff80;
  --strings: #feff80;
  --operators: #f780bf;
  --functions: #8aff80;
  --keywords: #f780bf;
  --tags: #f780bf;
  --numbers: #9580ff;
  --comments: #6272A4;
  --vars: #F8F8F2;
  --parameters: #f89580;
  --links: #feff80;


  --yellow: #feff80;
  --green: #8aff80;
  --cyan: #80ffea;
  --blue: #79cbdc;
  --purple: #9580ff;
  --red: #f780bf;
  --orange: #f89580;
  --gray: #6272A4;
  --silver: undefined;

  --laptop: url('../../img/themes/dracula.png');
  --logo: url('../../img/logo/material-dracula.svg');
}

.theme-github {
  --primary: #6F42C1;
  --accent: #79CB60;
  --accent2: #D73A49;
  --background: #F7F8FA;
  --foreground: #5B6168;
  --text: #292D31;
  --selectBg: #3A66D150;
  --selectFg: #FFFFFF;
  --selectFg2: #111111;
  --accent-text: #111111;
  --button: #edf1f5;
  --second: #F3f3f3;
  --disabled: #9ba0a3;
  --contrast: #fafbfc;
  --active: #cce5ff;
  --border: #DFE1E4;
  --hl: #CCE5FF;
  --tree: #3A66D1;
  --notif: #DFECFE;
  --excluded: #dcdcdc;

  --attributes: #6F42C1;
  --strings: #032F62;
  --operators: #D73A49;
  --functions: #6F42C1;
  --keywords: #D73A49;
  --tags: #22863A;
  --numbers: #005CC5;
  --comments: #6A737D;
  --vars: #24292E;
  --parameters: #E36209;
  --links: #005CC5;


  --yellow: #e36209;
  --green: #22863a;
  --cyan: #032F62;
  --blue: #005cc5;
  --purple: #6f42c1;
  --red: #d73a49;
  --orange: #e36209;
  --gray: #6A737D;
  --silver: undefined;

  --laptop: url('../../img/themes/github.png');
  --logo: url('../../img/logo/material-github.svg');
}

.theme-githubdark {
  --primary: #b392f0;
  --accent: #f9826c;
  --accent2: #f97583;
  --background: #24292e;
  --foreground: #e1e4e8;
  --text: #959da5;
  --selectBg: #3392FF44;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #39414a;
  --second: #2f363d;
  --disabled: #6a737d;
  --contrast: #1e2428;
  --active: #2b3036;
  --border: #1b1f23;
  --hl: #444d56;
  --tree: #39414a;
  --notif: #2f363d;
  --excluded: #2f363d;

  --attributes: #b392f0;
  --strings: #79b8ff;
  --operators: #f97583;
  --functions: #b392f0;
  --keywords: #f97583;
  --tags: #85e89d;
  --numbers: #79b8ff;
  --comments: #959da5;
  --vars: #d1d5da;
  --parameters: #ffab70;
  --links: #79b8ff;


  --yellow: #ffab70;
  --green: #85e89d;
  --cyan: #79b8ff;
  --blue: #79b8ff;
  --purple: #b392f0;
  --red: #f97583;
  --orange: #ffab70;
  --gray: #959da5;
  --silver: undefined;

  --laptop: url('../../img/themes/githubdark.png');
  --logo: url('../../img/logo/material-githubdark.svg');
}

.theme-arcdark {
  --primary: #F9EE98;
  --accent: #42A5F5;
  --accent2: #9B859D;
  --background: #2f343f;
  --foreground: #D3DAE3;
  --text: #8b9eb5;
  --selectBg: #8888FF55;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #383C4A;
  --second: #393f4c45;
  --disabled: #D3DAE3;
  --contrast: #262b33;
  --active: #41416A;
  --border: #404552;
  --hl: #393f4c;
  --tree: #09477170;
  --notif: #262a33;
  --excluded: #37373d;

  --attributes: #F9EE98;
  --strings: #8F9D6A;
  --operators: #A7A7A7;
  --functions: #7587A6;
  --keywords: #9B859D;
  --tags: #CF6A4C;
  --numbers: #CDA869;
  --comments: #747c84;
  --vars: #CF6A4C;
  --parameters: #CDA869;
  --links: #7587A6;


  --yellow: #f9ee98;
  --green: #8f9d6a;
  --cyan: #47bc9b;
  --blue: #7587a6;
  --purple: #9b859d;
  --red: #cf6a4c;
  --orange: #cda869;
  --gray: #747c84;
  --silver: undefined;

  --laptop: url('../../img/themes/arcdark.png');
  --logo: url('../../img/logo/material-arcdark.svg');
}

.theme-onedark {
  --primary: #E5C17C;
  --accent: #2979ff;
  --accent2: #C679DD;
  --background: #282C34;
  --foreground: #979FAD;
  --text: #979FAD;
  --selectBg: #4D515D;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #3A3F4B;
  --second: #2F333D;
  --disabled: #6B727D;
  --contrast: #21252B;
  --active: #383E49;
  --border: #282C34;
  --hl: #383D48;
  --tree: #3A3F4B80;
  --notif: #282C34;
  --excluded: #3c4150;

  --attributes: #E5C17C;
  --strings: #98C379;
  --operators: #61AFEF;
  --functions: #61AEEF;
  --keywords: #C679DD;
  --tags: #e06c75;
  --numbers: #D19A66;
  --comments: #59626F;
  --vars: #D19A66;
  --parameters: #ABB2BF;
  --links: #56B6C2;


  --yellow: #e5c17c;
  --green: #98c379;
  --cyan: #57b6c2;
  --blue: #61aeef;
  --purple: #c679dd;
  --red: #e06c75;
  --orange: #d19a66;
  --gray: #59626F;
  --silver: undefined;

  --laptop: url('../../img/themes/onedark.png');
  --logo: url('../../img/logo/material-onedark.svg');
}

.theme-onelight {
  --primary: #C18401;
  --accent: #2979ff;
  --accent2: #A626A4;
  --background: #F4F4F4;
  --foreground: #232324;
  --text: #7f7f7f;
  --selectBg: #FFFFFF;
  --selectFg: #232324;
  --selectFg2: #232324;
  --accent-text: #232324;
  --button: #DBDBDC;
  --second: #EAEAEB;
  --disabled: #b8b8b9;
  --contrast: #eaeae;
  --active: #DBDBDC;
  --border: #DBDBDC;
  --hl: #FFFFFF;
  --tree: #DBDBDC80;
  --notif: #F2F2F2;
  --excluded: #CACACB;

  --attributes: #C18401;
  --strings: #50A14E;
  --operators: #4078F2;
  --functions: #4078F2;
  --keywords: #A626A4;
  --tags: #E4564A;
  --numbers: #986801;
  --comments: #A0A1A7;
  --vars: #986801;
  --parameters: #383A42;
  --links: #0184BC;


  --yellow: #c18401;
  --green: #50a14e;
  --cyan: #0184bc;
  --blue: #4078f2;
  --purple: #a626a4;
  --red: #e4564a;
  --orange: #986801;
  --gray: #A0A1A7;
  --silver: undefined;

  --laptop: url('../../img/themes/onelight.png');
  --logo: url('../../img/logo/material-onelight.svg');
}

.theme-solardark {
  --primary: #B58900;
  --accent: #d33682;
  --accent2: #859900;
  --background: #002B36;
  --foreground: #839496;
  --text: #586e75;
  --selectBg: #2E4C52;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #073642;
  --second: #003745;
  --disabled: #2E5861;
  --contrast: #00252E;
  --active: #003946;
  --border: #0D3640;
  --hl: #005a6f;
  --tree: #2E4C5280;
  --notif: #2E4C52;
  --excluded: #083F4D;

  --attributes: #B58900;
  --strings: #2AA198;
  --operators: #93A1A1;
  --functions: #B58900;
  --keywords: #859900;
  --tags: #268BD2;
  --numbers: #D33682;
  --comments: #657B83;
  --vars: #268BD2;
  --parameters: #93A1A1;
  --links: #268BD2;


  --yellow: #b58900;
  --green: #859900;
  --cyan: #2aa198;
  --blue: #268bd2;
  --purple: #6c71c4;
  --red: #d13684;
  --orange: #cb4b16;
  --gray: #657B83;
  --silver: undefined;

  --laptop: url('../../img/themes/solardark.png');
  --logo: url('../../img/logo/material-solardark.svg');
}

.theme-solarlight {
  --primary: #657B83;
  --accent: #d33682;
  --accent2: #859900;
  --background: #fdf6e3;
  --foreground: #586e75;
  --text: #93a1a1;
  --selectBg: #e8dcb6;
  --selectFg: #002b36;
  --selectFg2: #002b36;
  --accent-text: #002b36;
  --button: #d8d4c4;
  --second: #F6F0DE;
  --disabled: #C9CCC3;
  --contrast: #eee8d5;
  --active: #d1cbb8;
  --border: #edead9;
  --hl: #d1cbb8;
  --tree: #e8dcb6b0;
  --notif: #EDE8D4;
  --excluded: #E3DCC9;

  --attributes: #657B83;
  --strings: #2AA198;
  --operators: #657B83;
  --functions: #B58900;
  --keywords: #859900;
  --tags: #268BD2;
  --numbers: #D33682;
  --comments: #93A1A1;
  --vars: #268BD2;
  --parameters: #657B83;
  --links: #268BD2;


  --yellow: #b58900;
  --green: #859900;
  --cyan: #2aa198;
  --blue: #268bd2;
  --purple: #6c71c4;
  --red: #d13684;
  --orange: #cb4b16;
  --gray: #93A1A1;
  --silver: undefined;

  --laptop: url('../../img/themes/solarlight.png');
  --logo: url('../../img/logo/material-solarlight.svg');
}

.theme-nightowl {
  --primary: #addb67;
  --accent: #7e57c2;
  --accent2: #c792ea;
  --background: #011627;
  --foreground: #d6deeb;
  --text: #5f7e97;
  --selectBg: #5f7e9790;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #0b253a;
  --second: #0b2942;
  --disabled: #697098;
  --contrast: #010e1a;
  --active: #13344f;
  --border: #122d42;
  --hl: #084d81;
  --tree: #13344f50;
  --notif: #01111d;
  --excluded: #0e293f;

  --attributes: #addb67;
  --strings: #ecc48d;
  --operators: #c792ea;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #7fdbca;
  --numbers: #f78c6c;
  --comments: #637777;
  --vars: #addb67;
  --parameters: #d6deeb;
  --links: #ecc48d;


  --yellow: #ecc48d;
  --green: #addb67;
  --cyan: #7fdbca;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #ff6363;
  --orange: #f78c6c;
  --gray: #637777;
  --silver: undefined;

  --laptop: url('../../img/themes/nightowl.png');
  --logo: url('../../img/logo/material-nightowl.svg');
}

.theme-lightowl {
  --primary: #0c969b;
  --accent: #2AA298;
  --accent2: #994cc3;
  --background: #F0F0F0;
  --foreground: #403f53;
  --text: #90A7B2;
  --selectBg: #d3e8f8;
  --selectFg: #403f53;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #d9d9d9;
  --second: #FBFBFB;
  --disabled: #93A1A1;
  --contrast: #f0f0f0;
  --active: #d3e8f8;
  --border: #d9d9d9;
  --hl: #CCCCCC;
  --tree: #d3e8f87c;
  --notif: #F0F0F0;
  --excluded: #E0E7EA;

  --attributes: #0c969b;
  --strings: #c96765;
  --operators: #994cc3;
  --functions: #4876d6;
  --keywords: #994cc3;
  --tags: #994cc3;
  --numbers: #aa0982;
  --comments: #989fb1;
  --vars: #4876d6;
  --parameters: #0c969b;
  --links: #ff869a;


  --yellow: #e0af02;
  --green: #56b6c2;
  --cyan: #0c969b;
  --blue: #4876d6;
  --purple: #994cc3;
  --red: #aa0982;
  --orange: #c96765;
  --gray: #989fb1;
  --silver: undefined;

  --laptop: url('../../img/themes/lightowl.png');
  --logo: url('../../img/logo/material-lightowl.svg');
}

.theme-moonlight {
  --primary: #ffbd76;
  --accent: #74a0f1;
  --accent2: #baacff;
  --background: #222436;
  --foreground: #c8d3f5;
  --text: #a9b8e8;
  --selectBg: #444a73;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #444a73;
  --second: #2f334d;
  --disabled: #828bb8;
  --contrast: #191a2a;
  --active: #2f334d;
  --border: #222436;
  --hl: #444a73;
  --tree: #444a7370;
  --notif: #191a2a;
  --excluded: #2f334d;

  --attributes: #ffbd76;
  --strings: #7af8ca;
  --operators: #baacff;
  --functions: #70b0ff;
  --keywords: #baacff;
  --tags: #ff757f;
  --numbers: #ff9668;
  --comments: #7e8eda;
  --vars: #c8d3f5;
  --parameters: #f3c1ff;
  --links: #34d3fb;


  --yellow: #ffdb8e;
  --green: #7af8ca;
  --cyan: #34d3fb;
  --blue: #70b0ff;
  --purple: #baacff;
  --red: #f3c1ff;
  --orange: #ff9668;
  --gray: #7e8eda;
  --silver: undefined;

  --laptop: url('../../img/themes/moonlight.png');
  --logo: url('../../img/logo/material-moonlight.svg');
}
`;
  s.id = 'themes';
  document.head.appendChild(s);
});
