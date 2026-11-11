/* Konfigurasi Firebase untuk app "Berdua".
   Isi dengan config web app dari Firebase Console (Project settings -> Your apps -> Web app).
   databaseURL WAJIB ada (Realtime Database). Nilai ini boleh publik; yang melindungi data adalah
   database.rules.json + login. Jangan ganti nama "window.BERDUA_FIREBASE". */
window.BERDUA_FIREBASE = {
  apiKey: "ISI_API_KEY",
  authDomain: "ISI_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://ISI_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ISI_PROJECT_ID",
  appId: "ISI_APP_ID"
};
