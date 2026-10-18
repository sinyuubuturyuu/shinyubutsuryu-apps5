(function () {
  "use strict";

  window.DRIVER_POINTS_FIREBASE_CONFIG = {
    apiKey: "AIzaSyAUs7d1xN4dc-UBzoGy21Aal1oOXImlKuo",
    authDomain: "shinyubutsuryu-apps.firebaseapp.com",
    projectId: "shinyubutsuryu-apps",
    storageBucket: "shinyubutsuryu-apps.firebasestorage.app",
    messagingSenderId: "627494924441",
    appId: "1:627494924441:web:30a434cec33f1d49d9c808",
    measurementId: "G-LDN6MRJ6PB"
  };

  window.DRIVER_POINTS_FIREBASE_SETTINGS = {
    appName: "driver-points-app",
    useAnonymousAuth: false,
    preferredCollection: "driver-points",
    collectionCandidates: [
      "driver-points"
    ],
    vehicleFieldCandidates: [
      "vehicleNumber",
      "vehicleKey",
      "vehicle",
      "carNumber",
      "truckNumber",
      "vehicleNo"
    ],
    driverFieldCandidates: [
      "driverKey",
      "driver",
      "driverName",
      "driverDisplay",
      "employeeName",
      "staffName",
      "name"
    ],
    pointsFieldCandidates: [
      "totalPoints",
      "dailyInspectionPoints",
      "points",
      "point",
      "grantedPoints",
      "currentPoints",
      "score"
    ],
    updatedAtFieldCandidates: [
      "updatedAt",
      "updated_at",
      "lastUpdatedAt",
      "modifiedAt",
      "createdAt"
    ],
    summaryKindValue: "driver_points_summary",
    docIdPatterns: [
      "{vehicle}__{driver}",
      "{vehicle}_{driver}",
      "{vehicle}-{driver}",
      "{driver}__{vehicle}",
      "{driver}_{vehicle}",
      "{driver}-{vehicle}"
    ]
  };
})();

