angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Gifts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var gifts = [
    { id: 0,
      name: 'Dominos Bedava Pizza',
      upcoin: 20,
      image: 'http://img3.wikia.nocookie.net/__cb20110216171918/wikiaglobal/images/5/5c/Dominos-logo.gif'
    },
    {
      id: 1,
      name: 'Grupanya 20TL Fırsatı',
      upcoin: 15,
      image: 'http://www.basinbulteni.com/sirket_logos/grupanya_logo.jpg'
    },
    {
      id: 2,
      name: 'FestTravel Boğaz Gezisi',
      upcoin: 35,
      image: 'http://im.haberturk.com/2011/04/21/623043_detay.jpg?1303374986'
    },
    {
      id: 3,
      name: 'Lamborghini ile 10 dakika Tur',
      upcoin: 50,
      image: 'http://a3.mzstatic.com/us/r30/Purple/v4/fd/d8/52/fdd852be-6b93-6377-5f47-25dd93bcf4e4/icon_256.png'
    },
    {
      id: 4,
      name: 'Mudo 20TL Hediye Çeki',
      upcoin: 30,
      image: 'http://logovector.org/wp-content/uploads/logos/png/m/mudo_city_logo.png'
    },
    {
      id: 5,
      name: 'Little Ceasers Büyük Boy Pizza',
      upcoin: 15,
      image: 'http://2.bp.blogspot.com/-kvKzZId_1HQ/UHcfrjBDmOI/AAAAAAAACL8/zMFmXwYZJ1E/s1600/LCP_StackVert_Black.jpg'
    },
    {
      id: 6,
      name: 'KFC Kova MenuLittle Ceasers Büyük Boy Pizza',
      upcoin: 15,
      image: 'http://www.scottishfoodsystemsinc.com/Graphics/KFC_Col_logo.jpg'
    },
    {
      id: 7,
      name: 'Sunset Restoran 2 Kişilik Yemek',
      upcoin: 10,
      image: 'http://www.plusistanbul.com/images/Resimler_Dosyalar/Mekanlar_Yeme_icme/sunset-restaurant-03-200-150.jpg'
    }
  ];

  return {
    all: function() {
      return gifts;
    },
    get: function(giftId) {
      // Simple index lookup
      return gifts[giftId];
    }
  }
})

.factory('Surveys', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var surveys = [
    { id: 0,
      name: 'Elektrikli Otomobiller',
      time: '2 saat 12 dakika 30 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 35
    },
    {
      id: 1,
      name: 'SurveyUp Anketi',
      time: '8 saat 24 dakika 42 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 10
    },
    {
      id: 2,
      name: 'Tüketici Araştırma Anketi',
      time: '10 saat 52 dakika 30 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 40
    },
    {
      id: 3,
      name: 'Devlerin Kapışması',
      time: '16 saat 47 dakika 11 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 5
    },
    {
      id: 4,
      name: 'Seyahat Tercihleri',
      time: '18 saat 2 dakika 26 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 20
    },
    {
      id: 5,
      name: 'Diyet Araştırması',
      time: '20 saat 11 dakika 5 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 30
    },
    {
      id: 6,
      name: 'Dizi Anketi',
      time: '21 saat 4 dakika 32 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 15
    },
    {
      id: 7,
      name: 'Okul Sonrası Eğitim',
      time: '23 saat 16 dakika 14 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 20
    },
    {
      id: 8,
      name: 'Günlük Hayatta Spor',
      time: '25 saat 47 dakika 11 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 10
    },
    {
      id: 9,
      name: 'Futbol Taraftar Anketi',
      time: '26 saat 19 dakika 42 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 35
    },
    {
      id: 10,
      name: 'Siyasi Tercih Anketi',
      time: '27 saat 14 dakika 11 saniye',
      image: 'http://www.placehold.it/30x30',
      upcoin: 20
    }
  ];

  return {
    all: function() {
      return surveys;
    },
    get: function(surveyId) {
      // Simple index lookup
      return surveys[surveyId];
    }
  }
});
