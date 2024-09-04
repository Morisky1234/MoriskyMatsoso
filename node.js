mkdir music-website
cd music-website
nmp init -y
nmp install express body-parser cors
npx create-react-app music-website-fronted
cd music-website-fronted
npm install axios