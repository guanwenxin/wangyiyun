<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg
        @click="backHome"
        t="1679131118354"
        class="icon liebiao"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="29545"
        width="81"
        height="81"
      >
        <path
          d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
          fill=""
          p-id="29546"
        ></path>
      </svg>
      <div class="leftMarquee">
        <Vue3Marquee style="color: #fff">{{ musicList.al.name }}</Vue3Marquee>
        <span v-for="item in musicList.ar" :key="item">
          {{ item.name }}
        </span>
        <svg
          t="1679130753261"
          class="icon liebiao"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="27571"
          width="81"
          height="81"
        >
          <path
            d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"
            p-id="27572"
          ></path>
        </svg>
      </div>
    </div>
    <div class="detailTopRight">
      <svg
        t="1679130867073"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="28567"
        width="81"
        height="81"
      >
        <path
          d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z"
          fill="#3D3D3D"
          p-id="28568"
        ></path>
      </svg>
    </div>
  </div>

  <div class="detailContent" v-show="!isLyricShow">
    <img
      src="@/assets/needle-ab.png"
      alt=""
      class="img_needle"
      :class="{ img_needle_active: !isbtnShow }"
    />
    <img src="@/assets/cd.png" alt="" class="img_cd" />
    <img
      :src="musicList.al.picUrl"
      alt=""
      class="img_ar"
      @click="isLyricShow = true"
      :class="{ img_ar_active: !isbtnShow, img_ar_pauesd: isbtnShow }"
    />
  </div>

  <div class="musicLyric" ref="musicLyric" v-show="isLyricShow">
    <p
      v-for="item in lyric"
      :key="item"
      :class="{
        active:
          currentTime * 1000 >= item.time && currentTime * 1000 < item.pre,
      }"
    >
      {{ item.lrc }}
    </p>
    <!-- {{ lyricList.lyric }}
    {{ lyric }} -->
  </div>

  <div class="detailFooter">
    <div class="footerTop">
      <svg
        t="1679133402585"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="35240"
        width="81"
        height="81"
      >
        <path
          d="M511.913993 928.016126c-28.898371 0-57.968755-12.729044-86.695112-41.455401L106.30472 564.034268C68.117588 516.38636 31.994625 471.318663 31.994625 383.935495c0-141.223585 114.905426-255.956996 255.956996-255.956996 53.15236 0 104.068537 16.169326 147.244079 46.615824 14.449185 10.148833 17.889467 30.102469 7.740635 44.551655-10.148833 14.449185-30.102469 17.889467-44.551655 7.740635-32.338653-22.877877-70.525785-34.918864-110.433059-34.918864-105.960692 0-191.967747 86.179069-191.967747 191.967747 0 61.409037 20.297665 90.135394 59.172854 138.643373l315.645893 318.742147c15.997312 15.997312 28.898371 22.361834 41.283387 22.533848 12.729044 0.172014 24.942046-6.192508 41.455401-22.705863l316.677977-319.946246c25.974131-28.210314 57.968755-75.858223 57.968755-137.439274 0-105.960692-86.179069-191.967747-191.967747-191.967747-47.991937 0-94.091718 17.889467-129.526625 50.22812l-133.998992 134.171006c-12.55703 12.55703-32.682681 12.55703-45.239711 0s-12.55703-32.682681 0-45.239711l135.031077-135.203091c48.335965-44.207626 109.745003-67.945574 173.734252-67.945574 141.223585 0 255.956996 114.905426 255.956996 255.956996 0 82.394759-41.111372 144.319839-75.686209 181.646901L598.781119 886.388712C569.882748 915.287082 540.984378 928.016126 511.913993 928.016126z"
          fill="#ffffff"
          p-id="35241"
        ></path>
      </svg>
      <svg
        t="1679133150499"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="31567"
        width="81"
        height="81"
      >
        <path
          d="M96 896h832c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H96c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z m448.906-132.192l276.45-276.45c12.497-12.496 32.758-12.496 45.255 0 12.497 12.497 12.497 32.759 0 45.255L535.597 863.627c-12.497 12.497-32.758 12.497-45.255 0L148.546 524.483c-12.497-12.496-12.497-32.758 0-45.254 12.496-12.497 32.758-12.497 45.254 0l287.106 284.453 0.032-667.427c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32l-0.032 667.553z"
          p-id="31568"
        ></path>
      </svg>
      <svg
        t="1679133458135"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="36359"
        width="81"
        height="81"
      >
        <path
          d="M424.96 450.56c-10.24 8.533333-15.36 22.186667-15.36 35.84s5.12 27.306667 15.36 37.546667c10.24 8.533333 22.186667 13.653333 37.546667 13.653333 13.653333 0 25.6-5.12 35.84-13.653333 10.24-10.257067 15.342933-23.893333 15.342933-37.546667s-5.12-27.306667-15.342933-35.84c-10.24-10.24-22.186667-15.36-35.84-15.36-15.36 0-27.306667 5.12-37.546667 15.36z"
          fill="#ffffff"
          p-id="36360"
        ></path>
        <path
          d="M646.826667 873.813333h-25.6a17.066667 17.066667 0 0 1-1.877334-0.1024c-32.887467-3.669333-60.859733-12.834133-85.589333-28.040533-35.601067-25.088-52.48-51.968-52.48-82.7904 0-32.4096 17.544533-60.2112 52.1728-82.602667C563.524267 659.592533 602.845867 648.533333 646.826667 648.533333c43.810133 0 82.551467 10.683733 115.080533 31.761067 14.574933 9.079467 26.965333 20.855467 35.652267 33.860267 4.130133 6.212267 3.669333 14.148267-0.597334 19.780266 8.6528 0.853333 15.4112 8.123733 15.4112 16.9984v11.946667c0 31.624533-16.315733 58.5216-49.885866 82.210133C729.770667 864.4096 691.2512 873.813333 646.826667 873.813333z m-24.6272-34.133333H646.826667c38.2464 0 70.929067-7.816533 97.143466-23.2448 30.583467-21.6576 34.2528-40.96 34.2528-53.5552V750.933333c0-3.8912 1.28-7.458133 3.464534-10.308266a16.981333 16.981333 0 0 1-12.526934-7.509334c-6.007467-9.0112-14.848-17.322667-25.565866-23.995733C716.4416 691.5072 683.963733 682.666667 646.826667 682.666667c-37.034667 0-69.700267 8.994133-94.446934 26.0096-33.1776 21.469867-36.9664 41.198933-36.9664 54.203733 0 18.909867 12.151467 36.676267 37.154134 54.3232 19.2 11.776 42.274133 19.336533 69.632 22.4768z"
          fill="#ffffff"
          p-id="36361"
        ></path>
        <path
          d="M795.306667 768c-7.150933 0-13.824-4.539733-16.196267-11.690667l-1.8432-5.819733c-2.2016-7.082667-3.669333-11.758933-7.2192-16.213333a17.066667 17.066667 0 1 1 26.658133-21.2992c7.560533 9.472 10.3936 18.568533 13.1584 27.374933l1.655467 5.205333A17.066667 17.066667 0 0 1 795.306667 768z"
          fill="#ffffff"
          p-id="36362"
        ></path>
        <path
          d="M783.36 740.693333a17.0496 17.0496 0 0 1-12.100267-29.098666c2.2016-2.218667 6.621867-7.953067 9.813334-12.782934a17.066667 17.066667 0 1 1 28.433066 18.909867c-3.84 5.751467-9.642667 13.533867-14.045866 17.954133a17.015467 17.015467 0 0 1-12.100267 5.0176z"
          fill="#ffffff"
          p-id="36363"
        ></path>
        <path
          d="M795.306667 768a17.066667 17.066667 0 0 1-17.066667-17.066667v-42.666666a17.066667 17.066667 0 1 1 34.133333 0V750.933333a17.066667 17.066667 0 0 1-17.066666 17.066667zM448.8704 904.533333l-0.8192-0.017066c-40.106667-1.8944-75.195733-9.966933-104.226133-17.6128-63.812267-21.213867-118.391467-55.415467-163.242667-101.9392C101.649067 707.822933 61.44 611.259733 61.44 498.346667c0-111.7696 40.192-207.752533 119.466667-285.269334C258.167467 134.058667 354.730667 93.866667 467.626667 93.866667c88.661333 0 167.850667 25.2416 235.383466 75.008a17.066667 17.066667 0 1 1-20.224 27.477333C621.226667 151.005867 548.829867 128 467.626667 128c-103.3728 0-191.709867 36.744533-262.570667 109.2096C132.317867 308.343467 95.573333 396.100267 95.573333 498.346667c0 103.389867 36.744533 191.709867 109.2096 262.570666 41.352533 42.871467 91.2896 74.1376 148.770134 93.303467 26.2656 6.8608 59.153067 14.455467 96.1024 16.196267A17.066667 17.066667 0 0 1 448.8704 904.533333z"
          fill="#ffffff"
          p-id="36364"
        ></path>
        <path
          d="M462.506667 633.173333c-39.2192 0-72.192-13.909333-100.8128-42.530133-27.3408-25.531733-40.840533-58.624-40.840534-100.829867 0-39.748267 12.970667-71.253333 40.840534-99.106133 30.378667-28.381867 64.1536-42.5472 100.8128-42.5472 38.126933 0 72.994133 14.711467 100.8128 42.5472 28.0064 29.969067 40.8576 61.3376 40.8576 99.106133 0 40.3456-13.3632 73.335467-40.8576 100.8128-25.8048 27.682133-60.808533 42.5472-100.8128 42.5472z m0-250.88c-28.1088 0-53.333333 10.786133-77.1072 32.955734C364.202667 436.462933 354.986667 458.888533 354.986667 489.813333c0 33.109333 9.386667 56.6272 30.429866 76.270934 22.613333 22.613333 46.984533 32.955733 77.1072 32.955733 30.72 0 56.388267-10.8032 76.253867-32.119467C559.957333 545.7408 570.026667 520.6528 570.026667 489.813333c0-28.9792-9.6256-52.241067-31.266134-75.383466C517.905067 393.557333 491.383467 382.293333 462.506667 382.293333z"
          fill="#ffffff"
          p-id="36365"
        ></path>
        <path
          d="M462.506667 554.666667c-18.397867 0-34.2528-5.768533-48.469334-17.595734-14.2848-14.1824-21.504-31.812267-21.504-50.670933 0-19.729067 7.8336-37.563733 21.504-48.9472 12.561067-12.663467 28.791467-19.319467 48.469334-19.319467 18.2784 0 34.4064 6.843733 47.906133 20.360534 12.509867 10.3424 20.343467 28.177067 20.343467 47.906133a69.614933 69.614933 0 0 1-20.343467 49.595733c-15.1552 12.7488-30.890667 18.670933-47.906133 18.670934z m0-102.4c-10.5984 0-18.210133 3.106133-25.480534 10.359466-6.912 5.853867-10.359467 14.353067-10.359466 23.773867 0 9.745067 3.6864 18.807467 10.359466 25.480533 6.894933 5.666133 15.104 8.6528 25.480534 8.6528 8.925867 0 17.083733-3.1744 24.917333-9.693866 5.5296-5.632 9.216-14.677333 9.216-24.439467 0-9.4208-3.447467-17.92-9.216-22.7328-8.209067-8.106667-15.7696-11.400533-24.917333-11.400533zM795.306667 725.333333a17.066667 17.066667 0 0 1-17.066667-17.066666V187.733333a17.066667 17.066667 0 0 1 25.531733-14.813866c75.8784 43.3664 123.306667 131.072 144.913067 268.151466a17.066667 17.066667 0 1 1-33.706667 5.3248C897.757867 337.237333 864.068267 262.826667 812.373333 220.194133V708.266667a17.066667 17.066667 0 0 1-17.066666 17.066666z"
          fill="#ffffff"
          p-id="36366"
        ></path>
      </svg>
      <svg
        t="1679133483715"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="37473"
        width="81"
        height="81"
      >
        <path
          d="M510.109613 191.290134c175.747811 0 318.81689 143.06908 318.81689 318.816891s-143.06908 318.81689-318.81689 318.81689H233.834851c-23.413115 0-42.542129-19.029383-42.542129-42.542129V510.107025c0-175.747811 143.06908-318.81689 318.816891-318.816891m0-42.442498C310.550165 148.847636 148.750594 310.647208 148.750594 510.206655v276.274762c0 46.925861 38.058766 84.984627 84.984627 84.984627h276.274761c199.559447 0 361.359019-161.799572 361.35902-361.359019 0.09963-199.559447-161.699942-361.259389-361.259389-361.259389z"
          p-id="37474"
          fill="#ffffff"
        ></path>
        <path
          d="M658.957248 425.122397H361.361607c-11.656743 0-21.221249 9.564507-21.221249 21.22125s9.564507 21.221249 21.221249 21.221249h297.595641c11.656743 0 21.221249-9.564507 21.22125-21.221249s-9.564507-21.221249-21.22125-21.22125z"
          p-id="37475"
          fill="#ffffff"
        ></path>
        <path
          d="M552.651742 573.870403H361.361607c-11.656743 0-21.221249 9.564507-21.221249 21.221249 0 11.656743 9.564507 21.221249 21.221249 21.221249h191.290135c11.656743 0 21.221249-9.564507 21.221249-21.221249 0-11.656743-9.564507-21.221249-21.221249-21.221249z"
          p-id="37476"
          fill="#ffffff"
        ></path>
      </svg>
      <svg
        t="1679133203522"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="33889"
        width="81"
        height="81"
      >
        <path
          d="M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-952.6C269.1 71.4 71.4 269 71.4 512S269 952.6 512 952.6 952.6 755 952.6 512 754.9 71.4 512 71.4z"
          fill="#ffffff"
          p-id="33890"
        ></path>
        <path
          d="M774 381H250c-19.7 0-35.7-16-35.7-35.7 0-19.7 16-35.7 35.7-35.7h523.9c19.7 0 35.7 16 35.7 35.7 0.1 19.7-15.9 35.7-35.6 35.7zM774 547.7H250c-19.7 0-35.7-16-35.7-35.7s16-35.7 35.7-35.7h523.9c19.7 0 35.7 16 35.7 35.7s-15.9 35.7-35.6 35.7zM774 714.4H250c-19.7 0-35.7-16-35.7-35.7 0-19.7 16-35.7 35.7-35.7h523.9c19.7 0 35.7 16 35.7 35.7 0.1 19.7-15.9 35.7-35.6 35.7z"
          fill="#ffffff"
          p-id="33891"
        ></path>
      </svg>
    </div>
    <div class="footerContent">
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
    </div>
    <div class="footer">
      <svg
        t="1679133521256"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="38546"
        width="81"
        height="81"
      >
        <path
          d="M192 789.333333a21.24 21.24 0 0 1-12.8-4.28 344.513333 344.513333 0 0 1-99.333333-118A341.246667 341.246667 0 0 1 384 170.666667h256q6.36 0 12.733333 0.233333l-49.153333-49.146667a21.333333 21.333333 0 0 1 30.173333-30.173333l85.333334 85.333333a21.333333 21.333333 0 0 1 0 30.173334l-85.333334 85.333333a21.333333 21.333333 0 0 1-30.173333-30.173333l48.666667-48.666667Q646.126667 213.333333 640 213.333333H384c-164.666667 0-298.666667 134-298.666667 298.666667 0 94.833333 43.546667 181.933333 119.48 238.966667A21.333333 21.333333 0 0 1 192 789.333333z m228.433333 143.06a21.333333 21.333333 0 0 0 0-30.173333l-49.153333-49.146667q6.366667 0.233333 12.733333 0.233334H640a341.46 341.46 0 0 0 304.146667-496.42 344.513333 344.513333 0 0 0-99.333334-118 21.333333 21.333333 0 1 0-25.626666 34.113333C895.12 330.066667 938.666667 417.166667 938.666667 512c0 164.666667-134 298.666667-298.666667 298.666667H384q-6.12 0-12.246667-0.246667l48.666667-48.666667a21.333333 21.333333 0 0 0-30.173333-30.173333l-85.333334 85.333333a21.333333 21.333333 0 0 0 0 30.173334l85.333334 85.333333a21.333333 21.333333 0 0 0 30.173333 0z"
          fill="#ffffff"
          p-id="38547"
        ></path>
      </svg>
      <!-- 上一首 -->
      <svg
        @click="goPlay(-1)"
        t="1679133542446"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="39582"
        width="81"
        height="81"
      >
        <path
          d="M268.025732 511.997952l487.950584 365.02634L755.976316 146.975708 268.025732 511.997952"
          p-id="39583"
          fill="#ffffff"
        ></path>
      </svg>
      <svg
        @click="play"
        v-if="isbtnShow"
        t="1679133562184"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="40616"
        width="81"
        height="81"
      >
        <path
          d="M512 5.12C231.424 5.12 3.584 232.96 3.584 514.048s227.84 507.904 508.416 507.904 508.416-227.328 508.416-508.416S792.576 5.12 512 5.12z m0 941.568c-239.616 0-433.664-194.048-433.664-433.664S272.384 80.384 512 80.384s433.664 194.048 433.664 433.664-194.048 432.64-433.664 432.64z"
          fill="#ffffff"
          p-id="40617"
        ></path>
        <path
          d="M665.088 493.056L382.464 329.728c-15.872-9.216-35.84 2.048-35.84 20.48v326.144c0 18.432 19.968 29.696 35.84 20.48l282.112-162.816c16.384-9.216 16.384-32.256 0.512-40.96z"
          fill="#ffffff"
          p-id="40618"
        ></path>
      </svg>
      <svg
        @click="play"
        v-else
        t="1679142971929"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="43725"
        width="81"
        height="81"
      >
        <path
          d="M512 977.454545C255.301818 977.454545 46.545455 768.651636 46.545455 512S255.301818 46.545455 512 46.545455s465.454545 208.802909 465.454545 465.454545-208.802909 465.454545-465.454545 465.454545z m0-861.090909c-218.158545 0-395.636364 177.477818-395.636364 395.636364 0 218.158545 177.477818 395.636364 395.636364 395.636364s395.636364-177.477818 395.636364-395.636364c0-218.158545-177.477818-395.636364-395.636364-395.636364zM414.999273 673.000727V351.045818a34.909091 34.909091 0 0 0-69.818182 0v321.954909a34.909091 34.909091 0 0 0 69.818182 0z m263.773091 0V351.045818a34.909091 34.909091 0 0 0-69.818182 0v321.954909a34.909091 34.909091 0 0 0 69.818182 0z"
          fill="#ffffff"
          p-id="43726"
        ></path>
      </svg>
      <!-- 下一首 -->
      <svg
        @click="goPlay(1)"
        t="1679133583450"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="41639"
        width="81"
        height="81"
      >
        <path
          d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z"
          p-id="41640"
          fill="#ffffff"
        ></path>
      </svg>
      <svg
        t="1679133596412"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="42685"
        width="81"
        height="81"
      >
        <path
          d="M640 149.333333a21.333333 21.333333 0 0 1 21.333333-21.333333h298.666667a21.333333 21.333333 0 0 1 0 42.666667H661.333333a21.333333 21.333333 0 0 1-21.333333-21.333334z m320 746.666667H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM661.333333 554.666667h298.666667a21.333333 21.333333 0 0 0 0-42.666667H661.333333a21.333333 21.333333 0 0 0 0 42.666667zM410.413333 85.333333A144.253333 144.253333 0 0 0 298.666667 138.34 144.266667 144.266667 0 0 0 42.666667 229.586667c0 35.653333 2.813333 69.166667 37.406666 118.366666 33.333333 47.4 96.486667 109.586667 204.78 201.633334a21.333333 21.333333 0 0 0 27.626667 0C420.773333 457.54 483.933333 395.333333 517.26 347.953333 551.853333 298.753333 554.666667 265.24 554.666667 229.586667A144.26 144.26 0 0 0 410.413333 85.333333z"
          fill="#ffffff"
          p-id="42686"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isLyricShow: false,
    };
  },
  computed: {
    ...mapState([
      "lyricList",
      "currentTime",
      "playListIndex",
      "playList",
      "duration",
    ]),
    lyric: function () {
      let arr;
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          // console.log(min,sec,Number(mill),lrc);
          return { min, sec, mill, lrc, time };
        });
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
      console.log(arr);
      return arr;
    },
  },
  mounted() {
    // console.log(this.musicList);
    // console.log(this.lyricList.lyric);
    this.addDuration();
  },
  props: ["musicList", "isbtnShow", "play", "addDuration"],
  methods: {
    backHome: function () {
      this.isLyricShow = false;
      this.updateDetailShow();
    },
    goPlay: function (num) {
      let index = this.playListIndex + num;
      if (index < 0) {
        index = this.playList.length - 1;
      } else if (index == this.playList.length) {
        index = 0;
      }
      this.updatePlayListIndex(index);
    },
    ...mapMutations(["updateDetailShow", "updatePlayListIndex"]),
  },
  watch: {
    currentTime: function (newValue) {
      let p = document.querySelector("p.active");
      // console.log([p]);
      if (p) {
        if (p.offsetTop > 300) {
          this.$refs.musicLyric.scrollTop = p.offsetTop - 300;
        }
      }
      if (newValue === this.duration) {
        if (this.playListIndex === this.playList.length - 1) {
          this.updatePlayListIndex(0);
          this.play();
        } else {
          this.updatePlayListIndex(this.playListIndex + 1);
        }
      }
      // console.log([this.$refs.musicLyric])
    },
  },
  components: {
    Vue3Marquee,
  },
};
</script>

<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.detailTop {
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .detailTopLeft {
    display: flex;
    align-items: center;
    .leftMarquee {
      width: 3rem;
      height: 100%;
      margin-left: 0.4rem;
      span {
        color: #999;
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #999;
      }
    }
  }
}
.detailContent {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_needle {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-13deg);
    transition: all 2s;
  }
  .img_needle_active {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }

  .img_cd {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_ar {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.14rem;
    animation: rotate_ar 10s linear infinite;
  }
  .img_ar_active {
    animation-play-state: running;
  }
  .img_ar_pauesd {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
.musicLyric {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
  overflow: scroll;
  p {
    color: rgb(190, 181, 181);
    margin-bottom: 0.3rem;
  }
  .active {
    color: #fff;
    font-size: 0.5rem;
  }
}
.detailFooter {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footerTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.36rem;
      height: 0.36rem;
      fill: rgb(245, 234, 234);
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .range {
    width: 100%;
    height: 0.06rem;
  }
  .footer {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>