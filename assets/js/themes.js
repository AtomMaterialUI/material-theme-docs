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
  --docId: OCEANIC;
  --primary: #ffcb6b;
  --accent: #009688;
  --accent2: #FFCB6B;
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
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #546e7a;
  --silver: #eeffff;

  --laptop: url('../../img/themes/oceanic.png');
  --logo: url('../../../img/logo/material-oceanic.svg');
}

.theme-darker {
  --docId: DARKER;
  --primary: #ffcb6b;
  --accent: #FF9800;
  --accent2: #89DDFF;
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
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #616161;
  --silver: #eeffff;

  --laptop: url('../../img/themes/darker.png');
  --logo: url('../../../img/logo/material-darker.svg');
}

.theme-lighter {
  --docId: LIGHTER;
  --primary: #F6A434;
  --accent: #00BCD4;
  --accent2: #D41800;
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
  --error: #e53935;
  --classes: #F6A434;


  --yellow: #f6a434;
  --green: #91b859;
  --cyan: #39adb5;
  --blue: #6182b8;
  --purple: #7c4dff;
  --red: #e53935;
  --orange: #f76d47;
  --gray: #AABFC9;
  --silver: #272727;

  --laptop: url('../../img/themes/lighter.png');
  --logo: url('../../../img/logo/material-lighter.svg');
}

.theme-palenight {
  --docId: PALENIGHT;
  --primary: #ffcb6b;
  --accent: #ab47bc;
  --accent2: #FFCB6B;
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
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #676E95;
  --silver: #eeffff;

  --laptop: url('../../img/themes/palenight.png');
  --logo: url('../../../img/logo/material-palenight.svg');
}

.theme-deepocean {
  --docId: DEEPOCEAN;
  --primary: #ffcb6b;
  --accent: #84ffff;
  --accent2: #F06292;
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
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #717CB4;
  --silver: #eeffff;

  --laptop: url('../../img/themes/deepocean.png');
  --logo: url('../../../img/logo/material-deepocean.svg');
}

.theme-forest {
  --docId: FOREST;
  --primary: #ffcb6b;
  --accent: #FFCC80;
  --accent2: #005454;
  --background: #002626;
  --foreground: #B2C2B0;
  --text: #49694D;
  --selectBg: #1E611E;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #003535;
  --second: #002E2E;
  --disabled: #005454;
  --contrast: #002020;
  --active: #104110;
  --border: #003838;
  --hl: #003F3F;
  --tree: #32CD3250;
  --notif: #002020;
  --excluded: #113711;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #005454;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #005454;
  --silver: #eeffff;

  --laptop: url('../../img/themes/forest.png');
  --logo: url('../../../img/logo/material-forest.svg');
}

.theme-skyblue {
  --docId: SKYBLUE;
  --primary: #F6A434;
  --accent: #00c6e0;
  --accent2: #E01A00;
  --background: #F5F5F5;
  --foreground: #005761;
  --text: #01579B;
  --selectBg: #ade2eb;
  --selectFg: #FFFFFF;
  --selectFg2: #272727;
  --accent-text: #272727;
  --button: #c9eef2;
  --second: #e7f2f3;
  --disabled: #e7f2f3;
  --contrast: #E4F2F2;
  --active: #caedf2;
  --border: #d0edf1;
  --hl: #d1eafa;
  --tree: #b6e1e780;
  --notif: #e0eff1;
  --excluded: #c1def0;

  --attributes: #F6A434;
  --strings: #91B859;
  --operators: #39ADB5;
  --functions: #6182B8;
  --keywords: #7C4DFF;
  --tags: #E53935;
  --numbers: #F76D47;
  --comments: #01579B;
  --vars: #272727;
  --parameters: #F76D47;
  --links: #39ADB5;
  --error: #e53935;
  --classes: #F6A434;


  --yellow: #f6a434;
  --green: #91b859;
  --cyan: #39adb5;
  --blue: #6182b8;
  --purple: #7c4dff;
  --red: #e53935;
  --orange: #f76d47;
  --gray: #01579B;
  --silver: #272727;

  --laptop: url('../../img/themes/skyblue.png');
  --logo: url('../../../img/logo/material-skyblue.svg');
}

.theme-sandybeach {
  --docId: SANDYBEACH;
  --primary: #F6A434;
  --accent: #53c7f0;
  --accent2: #945EB8;
  --background: #FFF8ED;
  --foreground: #546E7A;
  --text: #888477;
  --selectBg: #e7c496;
  --selectFg: #FFFFFF;
  --selectFg2: #272727;
  --accent-text: #272727;
  --button: #f6d7b0;
  --second: #f6edda;
  --disabled: #B8B6A5;
  --contrast: #FFF3DB;
  --active: #fef8ec;
  --border: #f2edde;
  --hl: #fbf1df;
  --tree: #e7c49680;
  --notif: #f6d7b0;
  --excluded: #f2e7ca;

  --attributes: #F6A434;
  --strings: #91B859;
  --operators: #39ADB5;
  --functions: #6182B8;
  --keywords: #7C4DFF;
  --tags: #E53935;
  --numbers: #F76D47;
  --comments: #888477;
  --vars: #272727;
  --parameters: #F76D47;
  --links: #39ADB5;
  --error: #e53935;
  --classes: #F6A434;


  --yellow: #f6a434;
  --green: #91b859;
  --cyan: #39adb5;
  --blue: #6182b8;
  --purple: #7c4dff;
  --red: #e53935;
  --orange: #f76d47;
  --gray: #888477;
  --silver: #272727;

  --laptop: url('../../img/themes/sandybeach.png');
  --logo: url('../../../img/logo/material-sandybeach.svg');
}

.theme-volcano {
  --docId: VOLCANO;
  --primary: #ffcb6b;
  --accent: #00bcd4;
  --accent2: #FFCC80;
  --background: #390000;
  --foreground: #ffeaea;
  --text: #ffd0aa;
  --selectBg: #750000;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #700000;
  --second: #330000;
  --disabled: #7f3c3c;
  --contrast: #300000;
  --active: #440000;
  --border: #400000;
  --hl: #550000;
  --tree: #77000050;
  --notif: #300a0a;
  --excluded: #662222;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #7F6451;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #7F6451;
  --silver: #eeffff;

  --laptop: url('../../img/themes/volcano.png');
  --logo: url('../../../img/logo/material-volcano.svg');
}

.theme-space {
  --docId: SPACE;
  --primary: #ffcb6b;
  --accent: #ad9bf6;
  --accent2: #E4F69B;
  --background: #1B2240;
  --foreground: #efeff1;
  --text: #959DAA;
  --selectBg: #383f56;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #313852;
  --second: #292f4d;
  --disabled: #5A6270;
  --contrast: #060F2F;
  --active: #303c6a;
  --border: #313852;
  --hl: #383f56;
  --tree: #31385270;
  --notif: #080f30;
  --excluded: #2f1d76;

  --attributes: #ffcb6b;
  --strings: #c3e88d;
  --operators: #89ddff;
  --functions: #82aaff;
  --keywords: #c792ea;
  --tags: #f07178;
  --numbers: #f78c6c;
  --comments: #959DAA;
  --vars: #eeffff;
  --parameters: #f78c6c;
  --links: #80cbc4;
  --error: #ff5370;
  --classes: #ffcb6b;


  --yellow: #ffcb6b;
  --green: #c3e88d;
  --cyan: #89ddff;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #f07178;
  --orange: #f78c6c;
  --gray: #959DAA;
  --silver: #eeffff;

  --laptop: url('../../img/themes/space.png');
  --logo: url('../../../img/logo/material-space.svg');
}

.theme-monokai {
  --docId: MONOKAI;
  --primary: #78DCE8;
  --accent: #ffd866;
  --accent2: #FF6188;
  --background: #2D2A2E;
  --foreground: #fcfcfa;
  --text: #939293;
  --selectBg: #6E6C6F;
  --selectFg: #FFFFFF;
  --selectFg2: #ffd866;
  --accent-text: #ffd866;
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
  --error: #f65f87;
  --classes: #78DCE8;


  --yellow: #ffd866;
  --green: #a9dc76;
  --cyan: #78dce8;
  --blue: #78dce8;
  --purple: #ab9df2;
  --red: #ff6188;
  --orange: #f59762;
  --gray: #727072;
  --silver: #fcfcfa;

  --laptop: url('../../img/themes/monokai.png');
  --logo: url('../../../img/logo/material-monokai.svg');
}

.theme-dracula {
  --docId: DRACULA;
  --primary: #8aff80;
  --accent: #FF79C5;
  --accent2: #80FFEA;
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
  --error: #ff5555;
  --classes: #8aff80;


  --yellow: #feff80;
  --green: #8aff80;
  --cyan: #80ffea;
  --blue: #79cbdc;
  --purple: #9580ff;
  --red: #f780bf;
  --orange: #f89580;
  --gray: #6272A4;
  --silver: #F8F8F2;

  --laptop: url('../../img/themes/dracula.png');
  --logo: url('../../../img/logo/material-dracula.svg');
}

.theme-github {
  --docId: GITHUB;
  --primary: #6F42C1;
  --accent: #79CB60;
  --accent2: #005CC4;
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
  --error: #d25252;
  --classes: #6F42C1;


  --yellow: #e36209;
  --green: #22863a;
  --cyan: #032F62;
  --blue: #005cc5;
  --purple: #6f42c1;
  --red: #d73a49;
  --orange: #e36209;
  --gray: #6A737D;
  --silver: #24292E;

  --laptop: url('../../img/themes/github.png');
  --logo: url('../../../img/logo/material-github.svg');
}

.theme-githubdark {
  --docId: GITHUB_DARK;
  --primary: #b392f0;
  --accent: #f9826c;
  --accent2: #9ECBFF;
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
  --error: #f97583;
  --classes: #b392f0;


  --yellow: #ffab70;
  --green: #85e89d;
  --cyan: #79b8ff;
  --blue: #79b8ff;
  --purple: #b392f0;
  --red: #f97583;
  --orange: #ffab70;
  --gray: #959da5;
  --silver: #d1d5da;

  --laptop: url('../../img/themes/githubdark.png');
  --logo: url('../../../img/logo/material-githubdark.svg');
}

.theme-arcdark {
  --docId: ARC_DARK;
  --primary: #F9EE98;
  --accent: #42A5F5;
  --accent2: #F9EE98;
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
  --error: #cf6a4c;
  --classes: #F9EE98;


  --yellow: #f9ee98;
  --green: #8f9d6a;
  --cyan: #47bc9b;
  --blue: #7587a6;
  --purple: #9b859d;
  --red: #cf6a4c;
  --orange: #cda869;
  --gray: #747c84;
  --silver: #d3dae3;

  --laptop: url('../../img/themes/arcdark.png');
  --logo: url('../../../img/logo/material-arcdark.svg');
}

.theme-onedark {
  --docId: ONE_DARK;
  --primary: #E5C17C;
  --accent: #2979ff;
  --accent2: #E5C17C;
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
  --error: #e06c75;
  --classes: #E5C17C;


  --yellow: #e5c17c;
  --green: #98c379;
  --cyan: #57b6c2;
  --blue: #61aeef;
  --purple: #c679dd;
  --red: #e06c75;
  --orange: #d19a66;
  --gray: #59626F;
  --silver: #abb2bf;

  --laptop: url('../../img/themes/onedark.png');
  --logo: url('../../../img/logo/material-onedark.svg');
}

.theme-onelight {
  --docId: ONE_LIGHT;
  --primary: #C18401;
  --accent: #2979ff;
  --accent2: #E2C08D;
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
  --contrast: #eaeaea;
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
  --error: #e4564a;
  --classes: #C18401;


  --yellow: #c18401;
  --green: #50a14e;
  --cyan: #0184bc;
  --blue: #4078f2;
  --purple: #a626a4;
  --red: #e4564a;
  --orange: #986801;
  --gray: #A0A1A7;
  --silver: #232324;

  --laptop: url('../../img/themes/onelight.png');
  --logo: url('../../../img/logo/material-onelight.svg');
}

.theme-solardark {
  --docId: SOLARIZED_DARK;
  --primary: #B58900;
  --accent: #d33682;
  --accent2: #2AA198;
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
  --error: #dc322f;
  --classes: #B58900;


  --yellow: #b58900;
  --green: #859900;
  --cyan: #2aa198;
  --blue: #268bd2;
  --purple: #6c71c4;
  --red: #d13684;
  --orange: #cb4b16;
  --gray: #657B83;
  --silver: #93A1A1;

  --laptop: url('../../img/themes/solardark.png');
  --logo: url('../../../img/logo/material-solardark.svg');
}

.theme-solarlight {
  --docId: SOLARIZED_LIGHT;
  --primary: #657B83;
  --accent: #d33682;
  --accent2: #FEDE5D;
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
  --error: #dc322f;
  --classes: #657B83;


  --yellow: #b58900;
  --green: #859900;
  --cyan: #2aa198;
  --blue: #268bd2;
  --purple: #6c71c4;
  --red: #d13684;
  --orange: #cb4b16;
  --gray: #93A1A1;
  --silver: #657b83;

  --laptop: url('../../img/themes/solarlight.png');
  --logo: url('../../../img/logo/material-solarlight.svg');
}

.theme-nightowl {
  --docId: NIGHT_OWL;
  --primary: #addb67;
  --accent: #7e57c2;
  --accent2: #89DDFF;
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
  --error: #ef5350;
  --classes: #addb67;


  --yellow: #ecc48d;
  --green: #addb67;
  --cyan: #7fdbca;
  --blue: #82aaff;
  --purple: #c792ea;
  --red: #ff6363;
  --orange: #f78c6c;
  --gray: #637777;
  --silver: #d6deeb;

  --laptop: url('../../img/themes/nightowl.png');
  --logo: url('../../../img/logo/material-nightowl.svg');
}

.theme-lightowl {
  --docId: LIGHT_OWL;
  --primary: #0c969b;
  --accent: #2AA298;
  --accent2: #AA0982;
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
  --error: #de3d3b;
  --classes: #0c969b;


  --yellow: #e0af02;
  --green: #56b6c2;
  --cyan: #0c969b;
  --blue: #4876d6;
  --purple: #994cc3;
  --red: #aa0982;
  --orange: #c96765;
  --gray: #989fb1;
  --silver: #111111;

  --laptop: url('../../img/themes/lightowl.png');
  --logo: url('../../../img/logo/material-lightowl.svg');
}

.theme-moonlight {
  --docId: MOONLIGHT;
  --primary: #ffbd76;
  --accent: #74a0f1;
  --accent2: #FFDB8E;
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
  --error: #ff5370;
  --classes: #ffbd76;


  --yellow: #ffdb8e;
  --green: #7af8ca;
  --cyan: #34d3fb;
  --blue: #70b0ff;
  --purple: #baacff;
  --red: #f3c1ff;
  --orange: #ff9668;
  --gray: #7e8eda;
  --silver: #c8d3f5;

  --laptop: url('../../img/themes/moonlight.png');
  --logo: url('../../../img/logo/material-moonlight.svg');
}

.theme-synthwave {
  --docId: SYNTHWAVE;
  --primary: #fede5d;
  --accent: #f92aad;
  --accent2: #FEDE5D;
  --background: #2a2139;
  --foreground: #ffffff;
  --text: #999999;
  --selectBg: #463465;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #382C4D;
  --second: #2a2139;
  --disabled: #848bbd;
  --contrast: #241b2f;
  --active: #34294f;
  --border: #34294f;
  --hl: #463564;
  --tree: #42384b70;
  --notif: #191621;
  --excluded: #463564;

  --attributes: #fede5d;
  --strings: #ff8b39;
  --operators: #fede5d;
  --functions: #36f9f6;
  --keywords: #fede5d;
  --tags: #72f1b8;
  --numbers: #f97e72;
  --comments: #848bbd;
  --vars: #b6b1b1;
  --parameters: #ff7edb;
  --links: #ff7edb;
  --error: #fe4450;
  --classes: #f92aad;


  --yellow: #fede5d;
  --green: #72f1b8;
  --cyan: #36f9f6;
  --blue: #34d3fb;
  --purple: #ff7edb;
  --red: #fe4450;
  --orange: #f97e72;
  --gray: #848bbd;
  --silver: #b6b1b1;

  --laptop: url('../../img/themes/synthwave.png');
  --logo: url('../../../img/logo/material-synthwave.svg');
}

.theme-cobalt2 {
  --docId: COBALT2;
  --primary: #FFC600;
  --accent: #FFC600;
  --accent2: #FF0088;
  --background: #193549;
  --foreground: #E1EFFF;
  --text: #6A879C;
  --selectBg: #234E6D;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #173042;
  --second: #122738;
  --disabled: #6A879C;
  --contrast: #0D3A58;
  --active: #122738;
  --border: #0D3A58;
  --hl: #1F4662;
  --tree: #234E6D80;
  --notif: #003F5E;
  --excluded: #173042;

  --attributes: #FFC600;
  --strings: #3AD900;
  --operators: #FF9D00;
  --functions: #FFC600;
  --keywords: #FF9D00;
  --tags: #FF628C;
  --numbers: #FF628C;
  --comments: #0088FF;
  --vars: #E1EFFF;
  --parameters: #FFC600;
  --links: #6FBEFF;
  --error: #FF628C;
  --classes: #FFC600;


  --yellow: #FFC600;
  --green: #3AD900;
  --cyan: #FB94FF;
  --blue: #0088FF;
  --purple: #FB94FF;
  --red: #FF628C;
  --orange: #FF9D00;
  --gray: #0088FF;
  --silver: #E1EFFF;

  --laptop: url('../../img/themes/cobalt2.png');
  --logo: url('../../../img/logo/material-cobalt2.svg');
}

.theme-prism {
  --docId: PRISM;
  --primary: #A277FF;
  --accent: #A277FF;
  --accent2: #82E2FF;
  --background: #0F111A;
  --foreground: #A6ACCD;
  --text: #464B5D;
  --selectBg: #717CB425;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #131520;
  --second: #0F111A;
  --disabled: #464B5D;
  --contrast: #1A1C29;
  --active: #131520;
  --border: #1A1C29;
  --hl: #191C29;
  --tree: #717CB425;
  --notif: #1A1C29;
  --excluded: #131520;

  --attributes: #A277FF;
  --strings: #61FFCA;
  --operators: #A277FF;
  --functions: #A277FF;
  --keywords: #A277FF;
  --tags: #FF6767;
  --numbers: #FFCA85;
  --comments: #464B5D;
  --vars: #A6ACCD;
  --parameters: #A277FF;
  --links: #82E2FF;
  --error: #FF5370;
  --classes: #A277FF;


  --yellow: #FFCA85;
  --green: #61FFCA;
  --cyan: #82E2FF;
  --blue: #82E2FF;
  --purple: #B774DC;
  --red: #FF6767;
  --orange: #FFCA85;
  --gray: #464B5D;
  --silver: #A6ACCD;

  --laptop: url('../../img/themes/prism.png');
  --logo: url('../../../img/logo/material-prism.svg');
}

.theme-prismLight {
  --docId: PRISM_LIGHT;
  --primary: #6366F1;
  --accent: #6366F1;
  --accent2: #2196F3;
  --background: #FAFAFA;
  --foreground: #29263C;
  --text: #9D9D9D;
  --selectBg: #6366F120;
  --selectFg: #29263C;
  --selectFg2: #29263C;
  --accent-text: #29263C;
  --button: #F1F5F9;
  --second: #FAFAFA;
  --disabled: #F1F5F9;
  --contrast: #E2E8F0;
  --active: #F1F5F9;
  --border: #E2E8F0;
  --hl: #E2E8F0;
  --tree: #6366F120;
  --notif: #E2E8F0;
  --excluded: #F1F5F9;

  --attributes: #6366F1;
  --strings: #00A67E;
  --operators: #6366F1;
  --functions: #6366F1;
  --keywords: #6366F1;
  --tags: #D7263D;
  --numbers: #F59E0B;
  --comments: #9D9D9D;
  --vars: #29263C;
  --parameters: #6366F1;
  --links: #2196F3;
  --error: #D7263D;
  --classes: #6366F1;


  --yellow: #F59E0B;
  --green: #00A67E;
  --cyan: #2196F3;
  --blue: #2196F3;
  --purple: #8931B9;
  --red: #D7263D;
  --orange: #F59E0B;
  --gray: #9D9D9D;
  --silver: #29263C;

  --laptop: url('../../img/themes/prismLight.png');
  --logo: url('../../../img/logo/material-prismLight.svg');
}

.theme-horizon {
  --docId: HORIZON;
  --primary: #FE5E78;
  --accent: #FE5E78;
  --accent2: #FFD586;
  --background: #1C1E26;
  --foreground: #D5D8DA;
  --text: #424557;
  --selectBg: #7D81A3;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #424557;
  --second: #1C1E26;
  --disabled: #424557;
  --contrast: #2E303E;
  --active: #424557;
  --border: #2E303E;
  --hl: #2E303E;
  --tree: #7D81A350;
  --notif: #2E303E;
  --excluded: #424557;

  --attributes: #FE5E78;
  --strings: #99D279;
  --operators: #FE5E78;
  --functions: #FE5E78;
  --keywords: #FE5E78;
  --tags: #F6637C;
  --numbers: #F8D28A;
  --comments: #424557;
  --vars: #D5D8DA;
  --parameters: #FE5E78;
  --links: #21B1BE;
  --error: #F6637C;
  --classes: #FE5E78;


  --yellow: #F8D28A;
  --green: #99D279;
  --cyan: #21B1BE;
  --blue: #21B1BE;
  --purple: #B774DC;
  --red: #F6637C;
  --orange: #F8D28A;
  --gray: #424557;
  --silver: #D5D8DA;

  --laptop: url('../../img/themes/horizon.png');
  --logo: url('../../../img/logo/material-horizon.svg');
}

.theme-horizonBright {
  --docId: HORIZON_BRIGHT;
  --primary: #E84A72;
  --accent: #E84A72;
  --accent2: #F77D26;
  --background: #FDF0ED;
  --foreground: #16161C;
  --text: #AF5427;
  --selectBg: #F9CBBE;
  --selectFg: #16161C;
  --selectFg2: #16161C;
  --accent-text: #16161C;
  --button: #F9CEC3;
  --second: #FDF0ED;
  --disabled: #F9CEC3;
  --contrast: #FADAD1;
  --active: #F9CEC3;
  --border: #F9CBBE;
  --hl: #F9CBBE;
  --tree: #F9CBBE80;
  --notif: #FADAD1;
  --excluded: #F9CEC3;

  --attributes: #E84A72;
  --strings: #07DA8C;
  --operators: #E84A72;
  --functions: #E84A72;
  --keywords: #E84A72;
  --tags: #E73665;
  --numbers: #F77D26;
  --comments: #AF5427;
  --vars: #16161C;
  --parameters: #E84A72;
  --links: #1EAEAE;
  --error: #E73665;
  --classes: #E84A72;


  --yellow: #F77D26;
  --green: #07DA8C;
  --cyan: #1EAEAE;
  --blue: #1EAEAE;
  --purple: #8931B9;
  --red: #E73665;
  --orange: #F77D26;
  --gray: #AF5427;
  --silver: #16161C;

  --laptop: url('../../img/themes/horizonBright.png');
  --logo: url('../../../img/logo/material-horizonBright.svg');
}

.theme-omni {
  --docId: OMNI;
  --primary: #988BC7;
  --accent: #988BC7;
  --accent2: #78D1E1;
  --background: #191622;
  --foreground: #E1E1E6;
  --text: #5A4B81;
  --selectBg: #41414D;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #15121E;
  --second: #191622;
  --disabled: #15121E;
  --contrast: #15121E;
  --active: #15121E;
  --border: #15121E;
  --hl: #15121E;
  --tree: #41414D80;
  --notif: #13111B;
  --excluded: #15121E;

  --attributes: #988BC7;
  --strings: #67E480;
  --operators: #988BC7;
  --functions: #988BC7;
  --keywords: #988BC7;
  --tags: #E96379;
  --numbers: #E7DE79;
  --comments: #5A4B81;
  --vars: #E1E1E6;
  --parameters: #988BC7;
  --links: #78D1E1;
  --error: #E96379;
  --classes: #988BC7;


  --yellow: #E7DE79;
  --green: #67E480;
  --cyan: #78D1E1;
  --blue: #78D1E1;
  --purple: #988BC7;
  --red: #E96379;
  --orange: #E7DE79;
  --gray: #5A4B81;
  --silver: #E1E1E6;

  --laptop: url('../../img/themes/omni.png');
  --logo: url('../../../img/logo/material-omni.svg');
}

.theme-noctis {
  --docId: NOCTIS;
  --primary: #49D6E9;
  --accent: #40D4E7;
  --accent2: #E4B781;
  --background: #052529;
  --foreground: #B2CACD;
  --text: #A5B5B5;
  --selectBg: #0E6671;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #073940;
  --second: #073940;
  --disabled: #47686C;
  --contrast: #041D20;
  --active: #062D32;
  --border: #073940;
  --hl: #0E6671;
  --tree: #1B3A3E;
  --notif: #073940;
  --excluded: #062D32;

  --attributes: #49D6E9;
  --strings: #49E9A6;
  --operators: #DF769B;
  --functions: #16A3B6;
  --keywords: #DF769B;
  --tags: #E66533;
  --numbers: #7060EB;
  --comments: #5B858B;
  --vars: #E4B781;
  --parameters: #E4B781;
  --links: #49D6E9;
  --error: #E34E1C;
  --classes: #49ACE9;


  --yellow: #49D6E9;
  --green: #49E9A6;
  --cyan: #40D4E7;
  --blue: #16A3B6;
  --purple: #DF769B;
  --red: #E66533;
  --orange: #E4B781;
  --gray: #5B858B;
  --silver: #B2CACD;

  --laptop: url('../../img/themes/noctis.png');
  --logo: url('../../../img/logo/material-noctis.svg');
}

.theme-winterIsComing {
  --docId: WINTER_IS_COMING;
  --primary: #F7ECB5;
  --accent: #219FD5;
  --accent2: #7E57C2;
  --background: #011627;
  --foreground: #A7DBF7;
  --text: #7799BB;
  --selectBg: #103362;
  --selectFg: #FFFFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #0E2637;
  --second: #0E293F;
  --disabled: #496B81;
  --contrast: #000D1D;
  --active: #1B3548;
  --border: #2B2F40;
  --hl: #03648A;
  --tree: #0C4994;
  --notif: #011627;
  --excluded: #0B253A;

  --attributes: #F7ECB5;
  --strings: #BCF0C0;
  --operators: #00BFF9;
  --functions: #87AFF4;
  --keywords: #00BFF9;
  --tags: #6DBDFA;
  --numbers: #8DEC95;
  --comments: #999999;
  --vars: #D6DEEB;
  --parameters: #D7DBE0;
  --links: #0BC2F6;
  --error: #EF5350;
  --classes: #D29FFC;


  --yellow: #F7ECB5;
  --green: #BCF0C0;
  --cyan: #00BFF9;
  --blue: #87AFF4;
  --purple: #D29FFC;
  --red: #6DBDFA;
  --orange: #F7ECB5;
  --gray: #999999;
  --silver: #A7DBF7;

  --laptop: url('../../img/themes/winterIsComing.png');
  --logo: url('../../../img/logo/material-winterIsComing.svg');
}

.theme-shadesOfPurple {
  --docId: SHADES_OF_PURPLE;
  --primary: #FAD000;
  --accent: #FAD000;
  --accent2: #B362FF;
  --background: #222244;
  --foreground: #E1EFFF;
  --text: #A599E9;
  --selectBg: #5E6184;
  --selectFg: #F4FFFF;
  --selectFg2: #FFFFFF;
  --accent-text: #FFFFFF;
  --button: #3B3A62;
  --second: #37365E;
  --disabled: #747898;
  --contrast: #1E1E3F;
  --active: #494A70;
  --border: #313059;
  --hl: #525378;
  --tree: #44446B;
  --notif: #222244;
  --excluded: #3D3C64;

  --attributes: #FAD000;
  --strings: #A5FF90;
  --operators: #FF9D00;
  --functions: #FAD000;
  --keywords: #FF9D00;
  --tags: #9EFFFF;
  --numbers: #FF628C;
  --comments: #B362FF;
  --vars: #E1EFFF;
  --parameters: #E1EFFF;
  --links: #FAA309;
  --error: #EC3A37;
  --classes: #FAD000;


  --yellow: #FAD000;
  --green: #A5FF90;
  --cyan: #9EFFFF;
  --blue: #9EFFFF;
  --purple: #B362FF;
  --red: #FF628C;
  --orange: #FF9D00;
  --gray: #B362FF;
  --silver: #E1EFFF;

  --laptop: url('../../img/themes/shadesOfPurple.png');
  --logo: url('../../../img/logo/material-shadesOfPurple.svg');
}
`;
  s.id = 'themes';
  document.head.appendChild(s);
});

window.jekyllAppThemes = [{"name":"Oceanic","docId":"OCEANIC","id":"oceanic","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#009688","accentT":"#00968870","accent2":"#FFCB6B","accent2T":"#FFCB6B70","bg":"#263238","fg":"#B0BEC5","text":"#607D8B","selectBg":"#546E7A","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#2E3C43","secondBg":"#32424A","disabled":"#415967","contrast":"#1E272C","active":"#314549","border":"#2A373E","hl":"#425B67","tree":"#546E7A70","notif":"#1E272C","excluded":"#2E3C43","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#546e7a","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#546e7a","silver":"#eeffff","white":"#eeffff"},{"name":"Darker","docId":"DARKER","id":"darker","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#FF9800","accentT":"#FF980070","accent2":"#89DDFF","accent2T":"#89DDFF70","bg":"#212121","fg":"#B0BEC5","text":"#727272","selectBg":"#404040","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#2A2A2A","secondBg":"#292929","disabled":"#474747","contrast":"#1A1A1A","active":"#323232","border":"#292929","hl":"#3F3F3F","tree":"#323232C0","notif":"#1A1A1A","excluded":"#323232","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#616161","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#616161","silver":"#eeffff","white":"#eeffff"},{"name":"Lighter","docId":"LIGHTER","id":"lighter","primary":"#F6A434","primaryT":"#F6A43470","accent":"#00BCD4","accentT":"#00BCD470","accent2":"#D41800","accent2T":"#D4180070","bg":"#FAFAFA","fg":"#546E7A","text":"#94A7B0","selectBg":"#80CBC440","selectFg":"#546e7a","selectFg2":"#272727","button":"#F3F4F5","secondBg":"#FFFFFF","disabled":"#D2D4D5","contrast":"#EEEEEE","active":"#E7E7E8","border":"#d3e1e8","hl":"#E7E7E8","tree":"#80CBC440","notif":"#eae8e8","excluded":"#CCD7DA50","attributes":"#F6A434","strings":"#91B859","operators":"#39ADB5","functions":"#6182B8","keywords":"#7C4DFF","tags":"#E53935","numbers":"#F76D47","comments":"#AABFC9","vars":"#272727","parameters":"#F76D47","links":"#39ADB5","error":"#e53935","classes":"#F6A434","yellow":"#f6a434","green":"#91b859","cyan":"#39adb5","blue":"#6182b8","purple":"#7c4dff","red":"#e53935","orange":"#f76d47","gray":"#AABFC9","silver":"#272727","white":"#272727"},{"name":"Palenight","docId":"PALENIGHT","id":"palenight","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#ab47bc","accentT":"#ab47bc70","accent2":"#FFCB6B","accent2T":"#FFCB6B70","bg":"#292D3E","fg":"#A6ACCD","text":"#676E95","selectBg":"#717CB470","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#303348","secondBg":"#34324a","disabled":"#515772","contrast":"#202331","active":"#414863","border":"#2b2a3e","hl":"#444267","tree":"#676E95","notif":"#202331","excluded":"#2f2e43","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#676E95","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#676E95","silver":"#eeffff","white":"#eeffff"},{"name":"Deep Ocean","docId":"DEEPOCEAN","id":"deepocean","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#84ffff","accentT":"#84ffff70","accent2":"#F06292","accent2T":"#F0629270","bg":"#0F111A","fg":"#8F93A2","text":"#4B526D","selectBg":"#717CB480","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#191A21","secondBg":"#181A1F","disabled":"#464B5D","contrast":"#090B10","active":"#1A1C25","border":"#0F111A","hl":"#1F2233","tree":"#717CB430","notif":"#090B10","excluded":"#292D3E","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#717CB4","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#717CB4","silver":"#eeffff","white":"#eeffff"},{"name":"Forest","docId":"FOREST","id":"forest","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#FFCC80","accentT":"#FFCC8070","accent2":"#005454","accent2T":"#00545470","bg":"#002626","fg":"#B2C2B0","text":"#49694D","selectBg":"#1E611E","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#003535","secondBg":"#002E2E","disabled":"#005454","contrast":"#002020","active":"#104110","border":"#003838","hl":"#003F3F","tree":"#32CD3250","notif":"#002020","excluded":"#113711","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#005454","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#005454","silver":"#eeffff","white":"#eeffff"},{"name":"Sky Blue","docId":"SKYBLUE","id":"skyblue","primary":"#F6A434","primaryT":"#F6A43470","accent":"#00c6e0","accentT":"#00c6e070","accent2":"#E01A00","accent2T":"#E01A0070","bg":"#F5F5F5","fg":"#005761","text":"#01579B","selectBg":"#ade2eb","selectFg":"#FFFFFF","selectFg2":"#272727","button":"#c9eef2","secondBg":"#e7f2f3","disabled":"#e7f2f3","contrast":"#E4F2F2","active":"#caedf2","border":"#d0edf1","hl":"#d1eafa","tree":"#b6e1e780","notif":"#e0eff1","excluded":"#c1def0","attributes":"#F6A434","strings":"#91B859","operators":"#39ADB5","functions":"#6182B8","keywords":"#7C4DFF","tags":"#E53935","numbers":"#F76D47","comments":"#01579B","vars":"#272727","parameters":"#F76D47","links":"#39ADB5","error":"#e53935","classes":"#F6A434","yellow":"#f6a434","green":"#91b859","cyan":"#39adb5","blue":"#6182b8","purple":"#7c4dff","red":"#e53935","orange":"#f76d47","gray":"#01579B","silver":"#272727","white":"#272727"},{"name":"Sandy Beach","docId":"SANDYBEACH","id":"sandybeach","primary":"#F6A434","primaryT":"#F6A43470","accent":"#53c7f0","accentT":"#53c7f070","accent2":"#945EB8","accent2T":"#945EB870","bg":"#FFF8ED","fg":"#546E7A","text":"#888477","selectBg":"#e7c496","selectFg":"#FFFFFF","selectFg2":"#272727","button":"#f6d7b0","secondBg":"#f6edda","disabled":"#B8B6A5","contrast":"#FFF3DB","active":"#fef8ec","border":"#f2edde","hl":"#fbf1df","tree":"#e7c49680","notif":"#f6d7b0","excluded":"#f2e7ca","attributes":"#F6A434","strings":"#91B859","operators":"#39ADB5","functions":"#6182B8","keywords":"#7C4DFF","tags":"#E53935","numbers":"#F76D47","comments":"#888477","vars":"#272727","parameters":"#F76D47","links":"#39ADB5","error":"#e53935","classes":"#F6A434","yellow":"#f6a434","green":"#91b859","cyan":"#39adb5","blue":"#6182b8","purple":"#7c4dff","red":"#e53935","orange":"#f76d47","gray":"#888477","silver":"#272727","white":"#272727"},{"name":"Volcano","docId":"VOLCANO","id":"volcano","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#00bcd4","accentT":"#00bcd470","accent2":"#FFCC80","accent2T":"#FFCC8070","bg":"#390000","fg":"#ffeaea","text":"#ffd0aa","selectBg":"#750000","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#700000","secondBg":"#330000","disabled":"#7f3c3c","contrast":"#300000","active":"#440000","border":"#400000","hl":"#550000","tree":"#77000050","notif":"#300a0a","excluded":"#662222","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#7F6451","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#7F6451","silver":"#eeffff","white":"#eeffff"},{"name":"Space","docId":"SPACE","id":"space","primary":"#ffcb6b","primaryT":"#ffcb6b70","accent":"#ad9bf6","accentT":"#ad9bf670","accent2":"#E4F69B","accent2T":"#E4F69B70","bg":"#1B2240","fg":"#efeff1","text":"#959DAA","selectBg":"#383f56","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#313852","secondBg":"#292f4d","disabled":"#5A6270","contrast":"#060F2F","active":"#303c6a","border":"#313852","hl":"#383f56","tree":"#31385270","notif":"#080f30","excluded":"#2f1d76","attributes":"#ffcb6b","strings":"#c3e88d","operators":"#89ddff","functions":"#82aaff","keywords":"#c792ea","tags":"#f07178","numbers":"#f78c6c","comments":"#959DAA","vars":"#eeffff","parameters":"#f78c6c","links":"#80cbc4","error":"#ff5370","classes":"#ffcb6b","yellow":"#ffcb6b","green":"#c3e88d","cyan":"#89ddff","blue":"#82aaff","purple":"#c792ea","red":"#f07178","orange":"#f78c6c","gray":"#959DAA","silver":"#eeffff","white":"#eeffff"},{"name":"Monokai Pro","docId":"MONOKAI","id":"monokai","primary":"#78DCE8","primaryT":"#78DCE870","accent":"#ffd866","accentT":"#ffd86670","accent2":"#FF6188","accent2T":"#FF618870","bg":"#2D2A2E","fg":"#fcfcfa","text":"#939293","selectBg":"#6E6C6F","selectFg":"#FFFFFF","selectFg2":"#ffd866","button":"#403E41","secondBg":"#403E41","disabled":"#5b595c","contrast":"#221F22","active":"#4A474B","border":"#2d2a2e","hl":"#5b595c","tree":"#403E41","notif":"#363437","excluded":"#3a3a3c","attributes":"#78DCE8","strings":"#FFD866","operators":"#FF6188","functions":"#A9DC76","keywords":"#FF6188","tags":"#FF6188","numbers":"#AB9DF2","comments":"#727072","vars":"#FCFCFA","parameters":"#F59762","links":"#78DCE8","error":"#f65f87","classes":"#78DCE8","yellow":"#ffd866","green":"#a9dc76","cyan":"#78dce8","blue":"#78dce8","purple":"#ab9df2","red":"#ff6188","orange":"#f59762","gray":"#727072","silver":"#fcfcfa","white":"#fcfcfa"},{"name":"Dracula","docId":"DRACULA","id":"dracula","primary":"#8aff80","primaryT":"#8aff8070","accent":"#FF79C5","accentT":"#FF79C570","accent2":"#80FFEA","accent2T":"#80FFEA70","bg":"#282A36","fg":"#F8F8F2","text":"#6272A4","selectBg":"#44475A","selectFg":"#8BE9FD","selectFg2":"#FFFFFF","button":"#393C4B","secondBg":"#282A36","disabled":"#6272A4","contrast":"#191A21","active":"#44475A","border":"#21222C","hl":"#6272A4","tree":"#44475A50","notif":"#1D2228","excluded":"#313341","attributes":"#8aff80","strings":"#feff80","operators":"#f780bf","functions":"#8aff80","keywords":"#f780bf","tags":"#f780bf","numbers":"#9580ff","comments":"#6272A4","vars":"#F8F8F2","parameters":"#f89580","links":"#feff80","error":"#ff5555","classes":"#8aff80","yellow":"#feff80","green":"#8aff80","cyan":"#80ffea","blue":"#79cbdc","purple":"#9580ff","red":"#f780bf","orange":"#f89580","gray":"#6272A4","silver":"#F8F8F2","white":"#F8F8F2"},{"name":"GitHub","docId":"GITHUB","id":"github","primary":"#6F42C1","primaryT":"#6F42C170","accent":"#79CB60","accentT":"#79CB6070","accent2":"#005CC4","accent2T":"#005CC470","bg":"#F7F8FA","fg":"#5B6168","text":"#292D31","selectBg":"#3A66D150","selectFg":"#FFFFFF","selectFg2":"#111111","button":"#edf1f5","secondBg":"#F3f3f3","disabled":"#9ba0a3","contrast":"#fafbfc","active":"#cce5ff","border":"#DFE1E4","hl":"#CCE5FF","tree":"#3A66D1","notif":"#DFECFE","excluded":"#dcdcdc","attributes":"#6F42C1","strings":"#032F62","operators":"#D73A49","functions":"#6F42C1","keywords":"#D73A49","tags":"#22863A","numbers":"#005CC5","comments":"#6A737D","vars":"#24292E","parameters":"#E36209","links":"#005CC5","error":"#d25252","classes":"#6F42C1","yellow":"#e36209","green":"#22863a","cyan":"#032F62","blue":"#005cc5","purple":"#6f42c1","red":"#d73a49","orange":"#e36209","gray":"#6A737D","silver":"#24292E","white":"#24292E"},{"name":"GitHub Dark","docId":"GITHUB_DARK","id":"githubdark","primary":"#b392f0","primaryT":"#b392f070","accent":"#f9826c","accentT":"#f9826c70","accent2":"#9ECBFF","accent2T":"#9ECBFF70","bg":"#24292e","fg":"#e1e4e8","text":"#959da5","selectBg":"#3392FF44","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#39414a","secondBg":"#2f363d","disabled":"#6a737d","contrast":"#1e2428","active":"#2b3036","border":"#1b1f23","hl":"#444d56","tree":"#39414a","notif":"#2f363d","excluded":"#2f363d","attributes":"#b392f0","strings":"#79b8ff","operators":"#f97583","functions":"#b392f0","keywords":"#f97583","tags":"#85e89d","numbers":"#79b8ff","comments":"#959da5","vars":"#d1d5da","parameters":"#ffab70","links":"#79b8ff","error":"#f97583","classes":"#b392f0","yellow":"#ffab70","green":"#85e89d","cyan":"#79b8ff","blue":"#79b8ff","purple":"#b392f0","red":"#f97583","orange":"#ffab70","gray":"#959da5","silver":"#d1d5da","white":"#d1d5da"},{"name":"Arc Dark","docId":"ARC_DARK","id":"arcdark","primary":"#F9EE98","primaryT":"#F9EE9870","accent":"#42A5F5","accentT":"#42A5F570","accent2":"#F9EE98","accent2T":"#F9EE9870","bg":"#2f343f","fg":"#D3DAE3","text":"#8b9eb5","selectBg":"#8888FF55","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#383C4A","secondBg":"#393f4c45","disabled":"#D3DAE3","contrast":"#262b33","active":"#41416A","border":"#404552","hl":"#393f4c","tree":"#09477170","notif":"#262a33","excluded":"#37373d","attributes":"#F9EE98","strings":"#8F9D6A","operators":"#A7A7A7","functions":"#7587A6","keywords":"#9B859D","tags":"#CF6A4C","numbers":"#CDA869","comments":"#747c84","vars":"#CF6A4C","parameters":"#CDA869","links":"#7587A6","error":"#cf6a4c","classes":"#F9EE98","yellow":"#f9ee98","green":"#8f9d6a","cyan":"#47bc9b","blue":"#7587a6","purple":"#9b859d","red":"#cf6a4c","orange":"#cda869","gray":"#747c84","silver":"#d3dae3","white":"#d3dae3"},{"name":"One Dark","docId":"ONE_DARK","id":"onedark","primary":"#E5C17C","primaryT":"#E5C17C70","accent":"#2979ff","accentT":"#2979ff70","accent2":"#E5C17C","accent2T":"#E5C17C70","bg":"#282C34","fg":"#979FAD","text":"#979FAD","selectBg":"#4D515D","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#3A3F4B","secondBg":"#2F333D","disabled":"#6B727D","contrast":"#21252B","active":"#383E49","border":"#282C34","hl":"#383D48","tree":"#3A3F4B80","notif":"#282C34","excluded":"#3c4150","attributes":"#E5C17C","strings":"#98C379","operators":"#61AFEF","functions":"#61AEEF","keywords":"#C679DD","tags":"#e06c75","numbers":"#D19A66","comments":"#59626F","vars":"#D19A66","parameters":"#ABB2BF","links":"#56B6C2","error":"#e06c75","classes":"#E5C17C","yellow":"#e5c17c","green":"#98c379","cyan":"#57b6c2","blue":"#61aeef","purple":"#c679dd","red":"#e06c75","orange":"#d19a66","gray":"#59626F","silver":"#abb2bf","white":"#abb2bf"},{"name":"One Light","docId":"ONE_LIGHT","id":"onelight","primary":"#C18401","primaryT":"#C1840170","accent":"#2979ff","accentT":"#2979ff70","accent2":"#E2C08D","accent2T":"#E2C08D70","bg":"#F4F4F4","fg":"#232324","text":"#7f7f7f","selectBg":"#FFFFFF","selectFg":"#232324","selectFg2":"#232324","button":"#DBDBDC","secondBg":"#EAEAEB","disabled":"#b8b8b9","contrast":"#eaeaea","active":"#DBDBDC","border":"#DBDBDC","hl":"#FFFFFF","tree":"#DBDBDC80","notif":"#F2F2F2","excluded":"#CACACB","attributes":"#C18401","strings":"#50A14E","operators":"#4078F2","functions":"#4078F2","keywords":"#A626A4","tags":"#E4564A","numbers":"#986801","comments":"#A0A1A7","vars":"#986801","parameters":"#383A42","links":"#0184BC","error":"#e4564a","classes":"#C18401","yellow":"#c18401","green":"#50a14e","cyan":"#0184bc","blue":"#4078f2","purple":"#a626a4","red":"#e4564a","orange":"#986801","gray":"#A0A1A7","silver":"#232324","white":"#232324"},{"name":"Solarized Dark","docId":"SOLARIZED_DARK","id":"solardark","primary":"#B58900","primaryT":"#B5890070","accent":"#d33682","accentT":"#d3368270","accent2":"#2AA198","accent2T":"#2AA19870","bg":"#002B36","fg":"#839496","text":"#586e75","selectBg":"#2E4C52","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#073642","secondBg":"#003745","disabled":"#2E5861","contrast":"#00252E","active":"#003946","border":"#0D3640","hl":"#005a6f","tree":"#2E4C5280","notif":"#2E4C52","excluded":"#083F4D","attributes":"#B58900","strings":"#2AA198","operators":"#93A1A1","functions":"#B58900","keywords":"#859900","tags":"#268BD2","numbers":"#D33682","comments":"#657B83","vars":"#268BD2","parameters":"#93A1A1","links":"#268BD2","error":"#dc322f","classes":"#B58900","yellow":"#b58900","green":"#859900","cyan":"#2aa198","blue":"#268bd2","purple":"#6c71c4","red":"#d13684","orange":"#cb4b16","gray":"#657B83","silver":"#93A1A1","white":"#93A1A1"},{"name":"Solarized Light","docId":"SOLARIZED_LIGHT","id":"solarlight","primary":"#657B83","primaryT":"#657B8370","accent":"#d33682","accentT":"#d3368270","accent2":"#FEDE5D","accent2T":"#FEDE5D70","bg":"#fdf6e3","fg":"#586e75","text":"#93a1a1","selectBg":"#e8dcb6","selectFg":"#002b36","selectFg2":"#002b36","button":"#d8d4c4","secondBg":"#F6F0DE","disabled":"#C9CCC3","contrast":"#eee8d5","active":"#d1cbb8","border":"#edead9","hl":"#d1cbb8","tree":"#e8dcb6b0","notif":"#EDE8D4","excluded":"#E3DCC9","attributes":"#657B83","strings":"#2AA198","operators":"#657B83","functions":"#B58900","keywords":"#859900","tags":"#268BD2","numbers":"#D33682","comments":"#93A1A1","vars":"#268BD2","parameters":"#657B83","links":"#268BD2","error":"#dc322f","classes":"#657B83","yellow":"#b58900","green":"#859900","cyan":"#2aa198","blue":"#268bd2","purple":"#6c71c4","red":"#d13684","orange":"#cb4b16","gray":"#93A1A1","silver":"#657b83","white":"#657b83"},{"name":"Night Owl","docId":"NIGHT_OWL","id":"nightowl","primary":"#addb67","primaryT":"#addb6770","accent":"#7e57c2","accentT":"#7e57c270","accent2":"#89DDFF","accent2T":"#89DDFF70","bg":"#011627","fg":"#d6deeb","text":"#5f7e97","selectBg":"#5f7e9790","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#0b253a","secondBg":"#0b2942","disabled":"#697098","contrast":"#010e1a","active":"#13344f","border":"#122d42","hl":"#084d81","tree":"#13344f50","notif":"#01111d","excluded":"#0e293f","attributes":"#addb67","strings":"#ecc48d","operators":"#c792ea","functions":"#82aaff","keywords":"#c792ea","tags":"#7fdbca","numbers":"#f78c6c","comments":"#637777","vars":"#addb67","parameters":"#d6deeb","links":"#ecc48d","error":"#ef5350","classes":"#addb67","yellow":"#ecc48d","green":"#addb67","cyan":"#7fdbca","blue":"#82aaff","purple":"#c792ea","red":"#ff6363","orange":"#f78c6c","gray":"#637777","silver":"#d6deeb","white":"#d6deeb"},{"name":"Light Owl","docId":"LIGHT_OWL","id":"lightowl","primary":"#0c969b","primaryT":"#0c969b70","accent":"#2AA298","accentT":"#2AA29870","accent2":"#AA0982","accent2T":"#AA098270","bg":"#F0F0F0","fg":"#403f53","text":"#90A7B2","selectBg":"#d3e8f8","selectFg":"#403f53","selectFg2":"#FFFFFF","button":"#d9d9d9","secondBg":"#FBFBFB","disabled":"#93A1A1","contrast":"#f0f0f0","active":"#d3e8f8","border":"#d9d9d9","hl":"#CCCCCC","tree":"#d3e8f87c","notif":"#F0F0F0","excluded":"#E0E7EA","attributes":"#0c969b","strings":"#c96765","operators":"#994cc3","functions":"#4876d6","keywords":"#994cc3","tags":"#994cc3","numbers":"#aa0982","comments":"#989fb1","vars":"#4876d6","parameters":"#0c969b","links":"#ff869a","error":"#de3d3b","classes":"#0c969b","yellow":"#e0af02","green":"#56b6c2","cyan":"#0c969b","blue":"#4876d6","purple":"#994cc3","red":"#aa0982","orange":"#c96765","gray":"#989fb1","silver":"#111111","white":"#111111"},{"name":"Moonlight","docId":"MOONLIGHT","id":"moonlight","primary":"#ffbd76","primaryT":"#ffbd7670","accent":"#74a0f1","accentT":"#74a0f170","accent2":"#FFDB8E","accent2T":"#FFDB8E70","bg":"#222436","fg":"#c8d3f5","text":"#a9b8e8","selectBg":"#444a73","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#444a73","secondBg":"#2f334d","disabled":"#828bb8","contrast":"#191a2a","active":"#2f334d","border":"#222436","hl":"#444a73","tree":"#444a7370","notif":"#191a2a","excluded":"#2f334d","attributes":"#ffbd76","strings":"#7af8ca","operators":"#baacff","functions":"#70b0ff","keywords":"#baacff","tags":"#ff757f","numbers":"#ff9668","comments":"#7e8eda","vars":"#c8d3f5","parameters":"#f3c1ff","links":"#34d3fb","error":"#ff5370","classes":"#ffbd76","yellow":"#ffdb8e","green":"#7af8ca","cyan":"#34d3fb","blue":"#70b0ff","purple":"#baacff","red":"#f3c1ff","orange":"#ff9668","gray":"#7e8eda","silver":"#c8d3f5","white":"#c8d3f5"},{"name":"SynthWave '84","docId":"SYNTHWAVE","id":"synthwave","primary":"#fede5d","primaryT":"#fede5d70","accent":"#f92aad","accentT":"#f92aad70","accent2":"#FEDE5D","accent2T":"#FEDE5D70","bg":"#2a2139","fg":"#ffffff","text":"#999999","selectBg":"#463465","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#382C4D","secondBg":"#2a2139","disabled":"#848bbd","contrast":"#241b2f","active":"#34294f","border":"#34294f","hl":"#463564","tree":"#42384b70","notif":"#191621","excluded":"#463564","attributes":"#fede5d","strings":"#ff8b39","operators":"#fede5d","functions":"#36f9f6","keywords":"#fede5d","tags":"#72f1b8","numbers":"#f97e72","comments":"#848bbd","vars":"#b6b1b1","parameters":"#ff7edb","links":"#ff7edb","error":"#fe4450","classes":"#f92aad","yellow":"#fede5d","green":"#72f1b8","cyan":"#36f9f6","blue":"#34d3fb","purple":"#ff7edb","red":"#fe4450","orange":"#f97e72","gray":"#848bbd","silver":"#b6b1b1","white":"#b6b1b1"},{"name":"Cobalt2","docId":"COBALT2","id":"cobalt2","primary":"#FFC600","primaryT":"#FFC60070","accent":"#FFC600","accentT":"#FFC60070","accent2":"#FF0088","accent2T":"#FF008870","bg":"#193549","fg":"#E1EFFF","text":"#6A879C","selectBg":"#234E6D","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#173042","secondBg":"#122738","disabled":"#6A879C","contrast":"#0D3A58","active":"#122738","border":"#0D3A58","hl":"#1F4662","tree":"#234E6D80","notif":"#003F5E","excluded":"#173042","attributes":"#FFC600","strings":"#3AD900","operators":"#FF9D00","functions":"#FFC600","keywords":"#FF9D00","tags":"#FF628C","numbers":"#FF628C","comments":"#0088FF","vars":"#E1EFFF","parameters":"#FFC600","links":"#6FBEFF","error":"#FF628C","classes":"#FFC600","yellow":"#FFC600","green":"#3AD900","cyan":"#FB94FF","blue":"#0088FF","purple":"#FB94FF","red":"#FF628C","orange":"#FF9D00","gray":"#0088FF","silver":"#E1EFFF","white":"#E1EFFF"},{"name":"Prism","docId":"PRISM","id":"prism","primary":"#A277FF","primaryT":"#A277FF70","accent":"#A277FF","accentT":"#A277FF70","accent2":"#82E2FF","accent2T":"#82E2FF70","bg":"#0F111A","fg":"#A6ACCD","text":"#464B5D","selectBg":"#717CB425","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#131520","secondBg":"#0F111A","disabled":"#464B5D","contrast":"#1A1C29","active":"#131520","border":"#1A1C29","hl":"#191C29","tree":"#717CB425","notif":"#1A1C29","excluded":"#131520","attributes":"#A277FF","strings":"#61FFCA","operators":"#A277FF","functions":"#A277FF","keywords":"#A277FF","tags":"#FF6767","numbers":"#FFCA85","comments":"#464B5D","vars":"#A6ACCD","parameters":"#A277FF","links":"#82E2FF","error":"#FF5370","classes":"#A277FF","yellow":"#FFCA85","green":"#61FFCA","cyan":"#82E2FF","blue":"#82E2FF","purple":"#B774DC","red":"#FF6767","orange":"#FFCA85","gray":"#464B5D","silver":"#A6ACCD","white":"#A6ACCD"},{"name":"Prism Light","docId":"PRISM_LIGHT","id":"prismLight","primary":"#6366F1","primaryT":"#6366F170","accent":"#6366F1","accentT":"#6366F170","accent2":"#2196F3","accent2T":"#2196F370","bg":"#FAFAFA","fg":"#29263C","text":"#9D9D9D","selectBg":"#6366F120","selectFg":"#29263C","selectFg2":"#29263C","button":"#F1F5F9","secondBg":"#FAFAFA","disabled":"#F1F5F9","contrast":"#E2E8F0","active":"#F1F5F9","border":"#E2E8F0","hl":"#E2E8F0","tree":"#6366F120","notif":"#E2E8F0","excluded":"#F1F5F9","attributes":"#6366F1","strings":"#00A67E","operators":"#6366F1","functions":"#6366F1","keywords":"#6366F1","tags":"#D7263D","numbers":"#F59E0B","comments":"#9D9D9D","vars":"#29263C","parameters":"#6366F1","links":"#2196F3","error":"#D7263D","classes":"#6366F1","yellow":"#F59E0B","green":"#00A67E","cyan":"#2196F3","blue":"#2196F3","purple":"#8931B9","red":"#D7263D","orange":"#F59E0B","gray":"#9D9D9D","silver":"#29263C","white":"#29263C"},{"name":"Horizon","docId":"HORIZON","id":"horizon","primary":"#FE5E78","primaryT":"#FE5E7870","accent":"#FE5E78","accentT":"#FE5E7870","accent2":"#FFD586","accent2T":"#FFD58670","bg":"#1C1E26","fg":"#D5D8DA","text":"#424557","selectBg":"#7D81A3","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#424557","secondBg":"#1C1E26","disabled":"#424557","contrast":"#2E303E","active":"#424557","border":"#2E303E","hl":"#2E303E","tree":"#7D81A350","notif":"#2E303E","excluded":"#424557","attributes":"#FE5E78","strings":"#99D279","operators":"#FE5E78","functions":"#FE5E78","keywords":"#FE5E78","tags":"#F6637C","numbers":"#F8D28A","comments":"#424557","vars":"#D5D8DA","parameters":"#FE5E78","links":"#21B1BE","error":"#F6637C","classes":"#FE5E78","yellow":"#F8D28A","green":"#99D279","cyan":"#21B1BE","blue":"#21B1BE","purple":"#B774DC","red":"#F6637C","orange":"#F8D28A","gray":"#424557","silver":"#D5D8DA","white":"#D5D8DA"},{"name":"Horizon Bright","docId":"HORIZON_BRIGHT","id":"horizonBright","primary":"#E84A72","primaryT":"#E84A7270","accent":"#E84A72","accentT":"#E84A7270","accent2":"#F77D26","accent2T":"#F77D2670","bg":"#FDF0ED","fg":"#16161C","text":"#AF5427","selectBg":"#F9CBBE","selectFg":"#16161C","selectFg2":"#16161C","button":"#F9CEC3","secondBg":"#FDF0ED","disabled":"#F9CEC3","contrast":"#FADAD1","active":"#F9CEC3","border":"#F9CBBE","hl":"#F9CBBE","tree":"#F9CBBE80","notif":"#FADAD1","excluded":"#F9CEC3","attributes":"#E84A72","strings":"#07DA8C","operators":"#E84A72","functions":"#E84A72","keywords":"#E84A72","tags":"#E73665","numbers":"#F77D26","comments":"#AF5427","vars":"#16161C","parameters":"#E84A72","links":"#1EAEAE","error":"#E73665","classes":"#E84A72","yellow":"#F77D26","green":"#07DA8C","cyan":"#1EAEAE","blue":"#1EAEAE","purple":"#8931B9","red":"#E73665","orange":"#F77D26","gray":"#AF5427","silver":"#16161C","white":"#16161C"},{"name":"Omni","docId":"OMNI","id":"omni","primary":"#988BC7","primaryT":"#988BC770","accent":"#988BC7","accentT":"#988BC770","accent2":"#78D1E1","accent2T":"#78D1E170","bg":"#191622","fg":"#E1E1E6","text":"#5A4B81","selectBg":"#41414D","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#15121E","secondBg":"#191622","disabled":"#15121E","contrast":"#15121E","active":"#15121E","border":"#15121E","hl":"#15121E","tree":"#41414D80","notif":"#13111B","excluded":"#15121E","attributes":"#988BC7","strings":"#67E480","operators":"#988BC7","functions":"#988BC7","keywords":"#988BC7","tags":"#E96379","numbers":"#E7DE79","comments":"#5A4B81","vars":"#E1E1E6","parameters":"#988BC7","links":"#78D1E1","error":"#E96379","classes":"#988BC7","yellow":"#E7DE79","green":"#67E480","cyan":"#78D1E1","blue":"#78D1E1","purple":"#988BC7","red":"#E96379","orange":"#E7DE79","gray":"#5A4B81","silver":"#E1E1E6","white":"#E1E1E6"},{"name":"Noctis","docId":"NOCTIS","id":"noctis","primary":"#49D6E9","primaryT":"#49D6E970","accent":"#40D4E7","accentT":"#40D4E770","accent2":"#E4B781","accent2T":"#E4B78170","bg":"#052529","fg":"#B2CACD","text":"#A5B5B5","selectBg":"#0E6671","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#073940","secondBg":"#073940","disabled":"#47686C","contrast":"#041D20","active":"#062D32","border":"#073940","hl":"#0E6671","tree":"#1B3A3E","notif":"#073940","excluded":"#062D32","attributes":"#49D6E9","strings":"#49E9A6","operators":"#DF769B","functions":"#16A3B6","keywords":"#DF769B","tags":"#E66533","numbers":"#7060EB","comments":"#5B858B","vars":"#E4B781","parameters":"#E4B781","links":"#49D6E9","error":"#E34E1C","classes":"#49ACE9","yellow":"#49D6E9","green":"#49E9A6","cyan":"#40D4E7","blue":"#16A3B6","purple":"#DF769B","red":"#E66533","orange":"#E4B781","gray":"#5B858B","silver":"#B2CACD","white":"#B2CACD"},{"name":"Winter is Coming","docId":"WINTER_IS_COMING","id":"winterIsComing","primary":"#F7ECB5","primaryT":"#F7ECB570","accent":"#219FD5","accentT":"#219FD570","accent2":"#7E57C2","accent2T":"#7E57C270","bg":"#011627","fg":"#A7DBF7","text":"#7799BB","selectBg":"#103362","selectFg":"#FFFFFF","selectFg2":"#FFFFFF","button":"#0E2637","secondBg":"#0E293F","disabled":"#496B81","contrast":"#000D1D","active":"#1B3548","border":"#2B2F40","hl":"#03648A","tree":"#0C4994","notif":"#011627","excluded":"#0B253A","attributes":"#F7ECB5","strings":"#BCF0C0","operators":"#00BFF9","functions":"#87AFF4","keywords":"#00BFF9","tags":"#6DBDFA","numbers":"#8DEC95","comments":"#999999","vars":"#D6DEEB","parameters":"#D7DBE0","links":"#0BC2F6","error":"#EF5350","classes":"#D29FFC","yellow":"#F7ECB5","green":"#BCF0C0","cyan":"#00BFF9","blue":"#87AFF4","purple":"#D29FFC","red":"#6DBDFA","orange":"#F7ECB5","gray":"#999999","silver":"#A7DBF7","white":"#A7DBF7"},{"name":"Shades of Purple","docId":"SHADES_OF_PURPLE","id":"shadesOfPurple","primary":"#FAD000","primaryT":"#FAD00070","accent":"#FAD000","accentT":"#FAD00070","accent2":"#B362FF","accent2T":"#B362FF70","bg":"#222244","fg":"#E1EFFF","text":"#A599E9","selectBg":"#5E6184","selectFg":"#F4FFFF","selectFg2":"#FFFFFF","button":"#3B3A62","secondBg":"#37365E","disabled":"#747898","contrast":"#1E1E3F","active":"#494A70","border":"#313059","hl":"#525378","tree":"#44446B","notif":"#222244","excluded":"#3D3C64","attributes":"#FAD000","strings":"#A5FF90","operators":"#FF9D00","functions":"#FAD000","keywords":"#FF9D00","tags":"#9EFFFF","numbers":"#FF628C","comments":"#B362FF","vars":"#E1EFFF","parameters":"#E1EFFF","links":"#FAA309","error":"#EC3A37","classes":"#FAD000","yellow":"#FAD000","green":"#A5FF90","cyan":"#9EFFFF","blue":"#9EFFFF","purple":"#B362FF","red":"#FF628C","orange":"#FF9D00","gray":"#B362FF","silver":"#E1EFFF","white":"#E1EFFF"}];
