<img src="https://user-images.githubusercontent.com/82254874/173244440-b6417f0c-fa99-435e-b265-6a85eda1b416.png" style="width: 50px">
<h1>블록체인 기반 기부형 펀딩 플랫폼</h1>
<strong>📌 블록네이션, 두 번째 프로젝트(22.06)</strong><br><br><br>
<h3>블록체인과 크라우드 펀딩의 만남, 새로운 기부 문화를 만들다.</h3>
<h4>&nbsp - 블록체인과 크라우드 펀딩의 결합, 투명성과 접근성을 모두 잡다.</h4><br>
🔗<strong> 사이트 예시 : </strong>  https://kwh97.github.io/blockchain_based_crowdfunding_donation_project <br><br>
📧<strong> Contact : </strong> zzzang0512@naver.com <br><br>
🔖<strong> Blog : </strong>https://kwh97.tistory.com

<br><br><br>

<h3>🛠 <strong> 사용 툴 및 참고</strong> 🛠</h3>

<img src="https://img.shields.io/badge/VisualStudioCode-32AAFF?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Ganache-FF8C0A?style=flat-square&logo=Ganache&logoColor=white"/> <img src="https://img.shields.io/badge/BlockChain-black?style=flat-square&logo=blockchain&logoColor=white"/> <img src="https://img.shields.io/badge/Ethereum-blue?style=flat-square&logo=ethereum&logoColor=white"/> <br>


<br>

<h3>👨‍💻 <strong> 사용 기술 스택 </strong> 👨‍💻</h3>

<img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-blue?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JAVASCRIPT-yellow?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/WEB3.JS-green?style=flat-square&logo=web3.js&logoColor=white"/>

<br>

<h3>📌 주요 구현 사항 </h3>
<span> - 크라우드 펀딩 방식을 적용하여 더욱 체계화된 기부 기능 구현 </span><br>
<span> - 기존 프로젝트 디자인 전면 수정하여 이전보다 더욱 섬세한 웹 구현 </span><br>
<span> - localStorage를 펀딩 진행과정에 적용</span><br>
<br>
<img src="https://user-images.githubusercontent.com/82254874/197122278-ed021ecb-ec29-44de-a109-ac2bbb37afa8.jpg" width="500" height="400">
<img src="https://user-images.githubusercontent.com/82254874/197122296-9d074e64-bc2c-4d61-8625-6b39c51182fd.jpg" width="600" height="500">

<br><br>

<h2>기부 방법</h2>
<strong>1. Ganache 실행하여, 가상의 암호화폐 계좌 및 키를 부여받는다.</strong><br><br>
<strong>2. 홈페이지와 Ganache를 연동하여, 계좌 정보를 홈페이지로 가져온 뒤 잔액조회를 통해 계좌 잔액을 확인한다. </strong><br><br>
<strong>3. 기부 대상을 선택하여 기부 진행 뒤, Hash와 영수증 조회를 통해 송금 성공 여부를 확인한다.</strong><br><br>
<br>
<img src="https://user-images.githubusercontent.com/82254874/197122198-477f46a2-ee04-4abd-8480-e00554f2de02.jpg" width="600" height="400">

<img src="https://user-images.githubusercontent.com/82254874/197122221-f16dfa4b-973e-44d8-9a80-82c238cb4f8a.jpg" width="600" height="400">

<img src="https://user-images.githubusercontent.com/82254874/197122240-0e3d8c75-5c9c-40a6-b22b-00036e9481a4.jpg" width="400" height="500">

<img src="https://user-images.githubusercontent.com/82254874/197122257-3cbdb527-c858-4842-b507-233096078f35.jpg" width="400" height="500">

<img src="https://user-images.githubusercontent.com/82254874/197122323-97ab4273-3daa-4180-942f-2433cf5980f9.jpg" width="600" height="400">

<img src="https://user-images.githubusercontent.com/82254874/197122341-c7460097-ddd8-44b4-a275-1d2d449b9548.jpg" width="300" height="400">

<br><br>

<h2>코드 설명</h2>
<strong>index.html , home.css - 메인 페이지 구성</strong><br><br>
<strong>list.html, list.css - 펀딩 목록 페이지 구성</strong><br><br>
<strong>donation.html , donation.css - 기부페이지 구성</strong><br><br>
<strong>home.js - 메인 페이지 기능 구현</strong><br><br>
<strong>list.js - 펀딩 목록 페이지 기능 구현</strong><br><br>
<strong>donation.js - 암호화폐 송금 및 기부페이지 기능 구현</strong><br><br>
<strong>web3.min.js - web3j 셋업 코드</strong><br><br><br>


<h2>localStorage 사용 예시</h2>
<img width="424" alt="스크린샷 2022-10-21 오후 3 14 02" src="https://user-images.githubusercontent.com/82254874/197125507-c7f3b6f1-754c-4895-9093-db453f78cfa5.png">

<br><br>

<h3>💡두 번째 프로젝트 회고</h3>
<strong>&nbsp &nbsp &nbsp다음 프로젝트를 위한 보완점</strong><br><br>
<span>&nbsp &nbsp - &nbsp 반응형 디자인 구현 필요</span><br>
<span>&nbsp &nbsp - &nbsp 싱글 페이지 웹 앱(SPA) 구현을 해보고 싶다.</span><br>
<span>&nbsp &nbsp - &nbsp 펀딩 달성률 업데이트를 localStorage 로 진행 한 것, 실제 서버를 이용할 필요가 있다.</span><br>
<span>&nbsp &nbsp - &nbsp 지금까지는 Ganache를 이용하여 가상의 암호화폐와 계좌를 부여, 실제 계좌와 암호화폐 적용 필요</span><br>

