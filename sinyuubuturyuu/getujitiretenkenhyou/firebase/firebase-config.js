// Firebase runtime config
// Fill production values and set enabled=true.
// Keep keys out of index.html by using this file.
(function () {
  "use strict";

  window.APP_FIREBASE_CONFIG = {
    apiKey: "AIzaSyAUs7d1xN4dc-UBzoGy21Aal1oOXImlKuo",
    authDomain: "shinyubutsuryu-apps.firebaseapp.com",
    projectId: "shinyubutsuryu-apps",
    appId: "1:627494924441:web:30a434cec33f1d49d9c808",
    messagingSenderId: "627494924441",
    storageBucket: "shinyubutsuryu-apps.firebasestorage.app",
    measurementId: "G-LDN6MRJ6PB"
  };
  window.APP_FIREBASE_SYNC_OPTIONS = {
    enabled: true,
    // Firestore collection name
    collection: "getujitiretenkenhyou",
    // Reuse existing collection to avoid additional Firestore rules setup
    settingsBackupCollection: "syainmeibo",
    // Prefix for document id
    documentPrefix: "getujitiretenkenhyou",
    // Company identifier for future access control
    companyCode: "company",
    // Use anonymous auth (no user login UI)
    useAnonymousAuth: false,
    // Retry flush interval (ms)
    autoFlushIntervalMs: 15000
  };

  window.APP_FIREBASE_DIRECTORY_CONFIG = {
    apiKey: "AIzaSyAUs7d1xN4dc-UBzoGy21Aal1oOXImlKuo",
    authDomain: "shinyubutsuryu-apps.firebaseapp.com",
    projectId: "shinyubutsuryu-apps",
    storageBucket: "shinyubutsuryu-apps.firebasestorage.app",
    messagingSenderId: "627494924441",
    appId: "1:627494924441:web:30a434cec33f1d49d9c808",
    measurementId: "G-LDN6MRJ6PB"
  };

  window.APP_FIREBASE_DIRECTORY_SYNC_OPTIONS = {
    enabled: true,
    appName: "sinyuubuturyuu-directory",
    collection: "syainmeibo",
    docIds: {
      vehicles: "monthly_tire_company_settings_backup_vehicles_slot1",
      drivers: "monthly_tire_company_settings_backup_drivers_slot1"
    },
    useAnonymousAuth: false
  };
})();


