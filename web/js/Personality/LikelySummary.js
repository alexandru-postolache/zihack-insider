(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PersonalityConsumptionPreferences = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    /**
     * Copyright 2016 IBM Corp. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use strict';

    module.exports = {
        'en': require('./en'),
        'es': require('./es'),
        'ja': require('./ja'),
        'ko': require('./ko')
    };

},{"./en":2,"./es":3,"./ja":5,"./ko":6}],2:[function(require,module,exports){
    'use strict';
    /*
     * Copyright 2015-2016 IBM Corp. All Rights Reserved.
    #
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
    #
     *      http://www.apache.org/licenses/LICENSE-2.0
    #
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use static';

    module.exports = require('../../../locales/en.json');

},{"../../../locales/en.json":8}],3:[function(require,module,exports){
    'use strict';
    /*
     * Copyright 2015-2016 IBM Corp. All Rights Reserved.
    #
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
    #
     *      http://www.apache.org/licenses/LICENSE-2.0
    #
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use static';

    module.exports = require('../../../locales/es.json');

},{"../../../locales/es.json":9}],4:[function(require,module,exports){
    /**
     * Copyright 2016 IBM Corp. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var _ = require('underscore'),
        contains = _.contains,
        extend = _.extend,
        keys = _.keys;

    var dictionaries = require('./dictionaries');

    var I18nData = function () {
        function I18nData(locale) {
            _classCallCheck(this, I18nData);

            this._locale = contains(keys(dictionaries), locale) ? locale : 'en';
            this._dictionary = dictionaries[this._locale];
        }

        _createClass(I18nData, [{
            key: 'data',
            value: function data() {
                return extend({}, this._dictionary);
            }
        }]);

        return I18nData;
    }();

    module.exports = I18nData;

},{"./dictionaries":1,"underscore":12}],5:[function(require,module,exports){
    'use strict';
    /*
     * Copyright 2015-2016 IBM Corp. All Rights Reserved.
    #
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
    #
     *      http://www.apache.org/licenses/LICENSE-2.0
    #
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use static';

    module.exports = require('../../../locales/ja.json');

},{"../../../locales/ja.json":10}],6:[function(require,module,exports){
    'use strict';
    /*
     * Copyright 2015-2016 IBM Corp. All Rights Reserved.
    #
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
    #
     *      http://www.apache.org/licenses/LICENSE-2.0
    #
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use static';

    module.exports = require('../../../locales/ko.json');

},{"../../../locales/ko.json":11}],7:[function(require,module,exports){
    /**
     * Copyright 2016 IBM Corp. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var _ = require('underscore');
    var extend = _.extend;
    var pick = _.pick;
    var pairs = _.pairs;

    var I18nDataV3 = require('./i18n/v3');
    var defaultVersion = 'v3';

    var PersonalityConsumptionPreferences = function () {
        function PersonalityConsumptionPreferences(options) {
            _classCallCheck(this, PersonalityConsumptionPreferences);

            this._options = extend(this.defaultOptions(), pick(options, 'locale', 'version'));
            this._version = typeof this._options.version !== 'undefined' ? this._options.version : defaultVersion;
            this._i18n = new I18nDataV3(this._options.locale);
            this._data = this._i18n.data();
        }

        _createClass(PersonalityConsumptionPreferences, [{
            key: 'defaultOptions',
            value: function defaultOptions() {
                return {
                    locale: 'en',
                    version: 'v3'
                };
            }
        }, {
            key: 'description',
            value: function description(consumption_preference_id) {
                return this._data[consumption_preference_id];
            }
        }, {
            key: 'descriptions',
            value: function descriptions() {
                return pairs(this._data).map(function (p) {
                    return p[1];
                });
            }
        }]);

        return PersonalityConsumptionPreferences;
    }();

    module.exports = PersonalityConsumptionPreferences;

},{"./i18n/v3":4,"underscore":12}],8:[function(require,module,exports){
    module.exports={
        "consumption_preferences_automobile_ownership_cost": "be sensitive to ownership cost when buying automobiles",
        "consumption_preferences_automobile_safety": "prefer safety when buying automobiles",
        "consumption_preferences_automobile_resale_value": "prefer resale value when buying automobiles",
        "consumption_preferences_clothes_quality": "prefer quality when buying clothes",
        "consumption_preferences_clothes_style": "prefer style when buying clothes",
        "consumption_preferences_clothes_comfort": "prefer comfort when buying clothes",
        "consumption_preferences_influence_brand_name": "be influenced by brand name when making product purchases",
        "consumption_preferences_influence_utility": "be influenced by product utility when making product purchases",
        "consumption_preferences_influence_online_ads": "be influenced by online ads when making product purchases",
        "consumption_preferences_influence_social_media": "be influenced by social media during product purchases",
        "consumption_preferences_influence_family_members": "be influenced by family when making product purchases",
        "consumption_preferences_spur_of_moment": "indulge in spur of the moment purchases",
        "consumption_preferences_credit_card_payment": "prefer using credit cards for shopping",
        "consumption_preferences_eat_out": "eat out frequently",
        "consumption_preferences_fast_food_frequency": "eat fast food frequently",
        "consumption_preferences_gym_membership": "have a gym membership",
        "consumption_preferences_adventurous_sports": "like adventurous sports",
        "consumption_preferences_outdoor": "like outdoor activities",
        "consumption_preferences_concerned_environment": "be concerned about the environment",
        "consumption_preferences_start_business": "consider starting a business in next few years",
        "consumption_preferences_movie_romance": "like romance movies",
        "consumption_preferences_movie_adventure": "like adventure movies",
        "consumption_preferences_movie_horror": "like horror movies",
        "consumption_preferences_movie_musical": "like musical movies",
        "consumption_preferences_movie_historical": "like historical movies",
        "consumption_preferences_movie_science_fiction": "like science-fiction movies",
        "consumption_preferences_movie_war": "like war movies",
        "consumption_preferences_movie_drama": "like drama movies",
        "consumption_preferences_movie_action": "like action movies",
        "consumption_preferences_movie_documentary": "like documentary movies",
        "consumption_preferences_music_rap": "like rap music",
        "consumption_preferences_music_country": "like country music",
        "consumption_preferences_music_r_b": "like R&B music",
        "consumption_preferences_music_hip_hop": "like hip hop music",
        "consumption_preferences_music_live_event": "attend live musical events",
        "consumption_preferences_music_christian_gospel": "like Christian/gospel music",
        "consumption_preferences_music_playing": "have experience playing music",
        "consumption_preferences_music_latin": "like Latin music",
        "consumption_preferences_music_rock": "like rock music",
        "consumption_preferences_music_classical": "like classical music",
        "consumption_preferences_read_frequency": "read often",
        "consumption_preferences_read_motive_enjoyment": "read for enjoyment",
        "consumption_preferences_read_motive_information": "read for information",
        "consumption_preferences_books_entertainment_magazines": "read entertainment magazines",
        "consumption_preferences_books_non_fiction": "read non-fiction books",
        "consumption_preferences_read_motive_mandatory": "do mandatory reading only",
        "consumption_preferences_read_motive_relaxation": "read for relaxation",
        "consumption_preferences_books_financial_investing": "read financial investment books",
        "consumption_preferences_books_autobiographies": "read autobiographical books",
        "consumption_preferences_volunteer": "volunteer for social causes",
        "consumption_preferences_volunteering_time": "have spent time volunteering",
        "consumption_preferences_volunteer_learning": "volunteer to learn about social causes"
    }

},{}],9:[function(require,module,exports){
    module.exports={
        "consumption_preferences_automobile_ownership_cost": "sea sensible al coste de propiedad al comprar automóviles",
        "consumption_preferences_automobile_safety": "prefiera la seguridad al comprar automóviles",
        "consumption_preferences_automobile_resale_value": "prefiera el valor de reventa al comprar automóviles",
        "consumption_preferences_clothes_quality": "prefiera la calidad al comprar ropa",
        "consumption_preferences_clothes_style": "prefiera el estilo al comprar ropa",
        "consumption_preferences_clothes_comfort": "prefiera la comodidad al comprar ropa",
        "consumption_preferences_influence_brand_name": "se deje influenciar por la marca al comprar productos",
        "consumption_preferences_influence_utility": "se deje influenciar por la utilidad al comprar productos",
        "consumption_preferences_influence_online_ads": "se deje influenciar por los anuncios en línea al comprar productos",
        "consumption_preferences_influence_social_media": "se deje influenciar por las redes sociales al comprar productos",
        "consumption_preferences_influence_family_members": "se deje influenciar por la familia al comprar productos",
        "consumption_preferences_spur_of_moment": "se dé algún capricho en el momento de hacer las compras",
        "consumption_preferences_credit_card_payment": "prefiera utilizar tarjetas de crédito en sus compras",
        "consumption_preferences_eat_out": "coma fuera con frecuencia",
        "consumption_preferences_fast_food_frequency": "consuma comida rápida con frecuencia",
        "consumption_preferences_gym_membership": "esté inscrito en un gimnasio",
        "consumption_preferences_adventurous_sports": "le gusten los deportes de aventura",
        "consumption_preferences_outdoor": "le gusten las actividades al aire libre",
        "consumption_preferences_concerned_environment": "le preocupe el medioambiente",
        "consumption_preferences_start_business": "esté pensando en iniciar un negocio en los próximos años",
        "consumption_preferences_movie_romance": "le gusten las películas románticas",
        "consumption_preferences_movie_adventure": "le gusten las películas de aventuras",
        "consumption_preferences_movie_horror": "le gusten las películas de terror",
        "consumption_preferences_movie_musical": "le gusten las películas musicales",
        "consumption_preferences_movie_historical": "le gusten las películas históricas",
        "consumption_preferences_movie_science_fiction": "le gusten las películas de ciencia ficción",
        "consumption_preferences_movie_war": "le gusten las películas bélicas",
        "consumption_preferences_movie_drama": "le gusten las películas dramáticas",
        "consumption_preferences_movie_action": "le gusten las películas de acción",
        "consumption_preferences_movie_documentary": "le gusten los documentales",
        "consumption_preferences_music_rap": "le guste la música rap",
        "consumption_preferences_music_country": "le guste la música country",
        "consumption_preferences_music_r_b": "le guste el rythm and blues",
        "consumption_preferences_music_hip_hop": "le guste la música hip hop",
        "consumption_preferences_music_live_event": "acuda a eventos musicales en directo",
        "consumption_preferences_music_christian_gospel": "le guste la música gospel/religiosa",
        "consumption_preferences_music_playing": "tenga experiencia interpretando música",
        "consumption_preferences_music_latin": "le guste la música latina",
        "consumption_preferences_music_rock": "le guste el rock",
        "consumption_preferences_music_classical": "le guste la música clásica",
        "consumption_preferences_read_frequency": "lea con frecuencia",
        "consumption_preferences_read_motive_enjoyment": "lea por el placer de hacerlo",
        "consumption_preferences_read_motive_information": "lea para informarse",
        "consumption_preferences_books_entertainment_magazines": "lea revistas de entretenimiento",
        "consumption_preferences_books_non_fiction": "lea libros que no sean de ficción",
        "consumption_preferences_read_motive_mandatory": "lea únicamente lo que le obligan a leer",
        "consumption_preferences_read_motive_relaxation": "lea para relajarse",
        "consumption_preferences_books_financial_investing": "lea libros de inversión financiera",
        "consumption_preferences_books_autobiographies": "lea libros autobiográficos",
        "consumption_preferences_volunteer": "sea voluntario en obras sociales",
        "consumption_preferences_volunteering_time": "haya dedicado parte de su tiempo al voluntariado",
        "consumption_preferences_volunteer_learning": "sea voluntario para saber más sobre las obras sociales"
    }

},{}],10:[function(require,module,exports){
    module.exports={
        "consumption_preferences_automobile_ownership_cost": "自動車を買うときは維持費用を重視する",
        "consumption_preferences_automobile_safety": "自動車を買うときは安全性を優先する",
        "consumption_preferences_automobile_resale_value": "自動車を買うときはリセールバリューを優先する",
        "consumption_preferences_clothes_quality": "衣服を買うときは品質を優先する",
        "consumption_preferences_clothes_style": "衣服を買うときはスタイルを優先する",
        "consumption_preferences_clothes_comfort": "衣服を買うときは着心地を優先する",
        "consumption_preferences_influence_brand_name": "商品を購入するときはブランド名に左右される",
        "consumption_preferences_influence_utility": "商品を購入するときは商品の実用性を重視する",
        "consumption_preferences_influence_online_ads": "商品を購入するときはオンライン広告に左右される",
        "consumption_preferences_influence_social_media": "製品の購入中にソーシャル・メディアに左右される",
        "consumption_preferences_influence_family_members": "商品を購入するときは家族の影響を受ける",
        "consumption_preferences_spur_of_moment": "衝動買いに走る",
        "consumption_preferences_credit_card_payment": "買い物にクレジット・カードを使うことが多い",
        "consumption_preferences_eat_out": "頻繁に外食する",
        "consumption_preferences_fast_food_frequency": "頻繁にファースト・フードを食べる",
        "consumption_preferences_gym_membership": "スポーツ・ジムの会員である",
        "consumption_preferences_adventurous_sports": "アドベンチャー・スポーツを好む",
        "consumption_preferences_outdoor": "アウトドア活動を好む",
        "consumption_preferences_concerned_environment": "環境問題について心配している",
        "consumption_preferences_start_business": "数年後に起業することを考えている",
        "consumption_preferences_movie_romance": "ロマンス映画を好む",
        "consumption_preferences_movie_adventure": "アドベンチャー映画を好む",
        "consumption_preferences_movie_horror": "ホラー映画を好む",
        "consumption_preferences_movie_musical": "ミュージカル映画を好む",
        "consumption_preferences_movie_historical": "歴史映画を好む",
        "consumption_preferences_movie_science_fiction": "SF 映画を好む",
        "consumption_preferences_movie_war": "戦争映画を好む",
        "consumption_preferences_movie_drama": "ドラマ映画を好む",
        "consumption_preferences_movie_action": "アクション映画を好む",
        "consumption_preferences_movie_documentary": "ドキュメンタリー映画を好む",
        "consumption_preferences_music_rap": "ラップ・ミュージックを好む",
        "consumption_preferences_music_country": "カントリー・ミュージックを好む",
        "consumption_preferences_music_r_b": "R&B ミュージックを好む",
        "consumption_preferences_music_hip_hop": "ヒップ・ホップ・ミュージックを好む",
        "consumption_preferences_music_live_event": "ライブの音楽イベントに行く",
        "consumption_preferences_music_christian_gospel": "キリスト教音楽/ゴスペル音楽を好む",
        "consumption_preferences_music_playing": "楽器演奏の経験がある",
        "consumption_preferences_music_latin": "ラテン音楽を好む",
        "consumption_preferences_music_rock": "ロック音楽を好む",
        "consumption_preferences_music_classical": "クラシック音楽を好む",
        "consumption_preferences_read_frequency": "いつも読書している",
        "consumption_preferences_read_motive_enjoyment": "楽しみのために読書する",
        "consumption_preferences_read_motive_information": "情報収集のために読書する",
        "consumption_preferences_books_entertainment_magazines": "娯楽雑誌を読む",
        "consumption_preferences_books_non_fiction": "ノンフィクション作品を読む",
        "consumption_preferences_read_motive_mandatory": "必読書だけを読む",
        "consumption_preferences_read_motive_relaxation": "気晴らしに読書する",
        "consumption_preferences_books_financial_investing": "投資関連書籍を読む",
        "consumption_preferences_books_autobiographies": "自伝や伝記を読む",
        "consumption_preferences_volunteer": "社会貢献のためにボランティア活動をする",
        "consumption_preferences_volunteering_time": "ボランティア活動に参加したことがある",
        "consumption_preferences_volunteer_learning": "社会貢献について学ぶためにボランティア活動をする"
    }

},{}],11:[function(require,module,exports){
    module.exports={
        "consumption_preferences_automobile_ownership_cost": "자동차를 구매할 때 유지 비용에 민감한",
        "consumption_preferences_automobile_safety": "자동차를 구매할 때 안전을 우선하는",
        "consumption_preferences_automobile_resale_value": "자동차를 살 때는 재판매가격을 우선하는",
        "consumption_preferences_clothes_quality": "옷을 살 때 품질을 우선하는",
        "consumption_preferences_clothes_style": "옷을 살 때 스타일을 선호하는",
        "consumption_preferences_clothes_comfort": "옷을 살 때는 착용감을 우선하는",
        "consumption_preferences_influence_brand_name": "제품을 구입할 때 브랜드를 고려하는",
        "consumption_preferences_influence_utility": "제품을 구입할 때 제품의 실용성을 중시하는",
        "consumption_preferences_influence_online_ads": "온라인 광고에 영향을 받아 제품을 구입하는",
        "consumption_preferences_influence_social_media": "SNS에 영향을 받아 제품을 구입하는",
        "consumption_preferences_influence_family_members": "가족에게 영향받아 제품을 구입하는",
        "consumption_preferences_spur_of_moment": "충동 구매에 영향을 잘 받아 쇼핑하는",
        "consumption_preferences_credit_card_payment": "쇼핑에 주로 신용 카드를 사용하는",
        "consumption_preferences_eat_out": "자주 외식하는",
        "consumption_preferences_fast_food_frequency": "자주 패스트푸드를 먹는",
        "consumption_preferences_gym_membership": "스포츠 센터의 회원인",
        "consumption_preferences_adventurous_sports": "익스트림 스포츠를 좋아하는",
        "consumption_preferences_outdoor": "야외 활동을 좋아하는",
        "consumption_preferences_concerned_environment": "환경 문제에 대해 걱정하는",
        "consumption_preferences_start_business": "몇 년 후 창업을 생각하는",
        "consumption_preferences_movie_romance": "로맨스 영화를 좋아하는",
        "consumption_preferences_movie_adventure": "어드벤처 영화를 좋아하는",
        "consumption_preferences_movie_horror": "공포 영화를 좋아하는",
        "consumption_preferences_movie_musical": "뮤지컬 영화를 좋아하는",
        "consumption_preferences_movie_historical": "역사 영화를 좋아하는",
        "consumption_preferences_movie_science_fiction": "SF 영화를 좋아하는",
        "consumption_preferences_movie_war": "전쟁 영화를 좋아하는",
        "consumption_preferences_movie_drama": "드라마 영화를 좋아하는",
        "consumption_preferences_movie_action": "액션 영화를 좋아하는",
        "consumption_preferences_movie_documentary": "다큐멘터리 영화를 좋아하는",
        "consumption_preferences_music_rap": "랩을 좋아하는",
        "consumption_preferences_music_country": "컨트리 음악을 좋아하는",
        "consumption_preferences_music_r_b": "R&B 음악을 선호",
        "consumption_preferences_music_hip_hop": "힙합 음악을 좋아하는",
        "consumption_preferences_music_live_event": "라이브 공연에 참석하는",
        "consumption_preferences_music_christian_gospel": "기독교 음악(CCM)/가스펠 음악을 좋아하는",
        "consumption_preferences_music_playing": "악기 연주 경험이있는",
        "consumption_preferences_music_latin": "라틴 음악을 좋아하는",
        "consumption_preferences_music_rock": "록 음악을 좋아하는",
        "consumption_preferences_music_classical": "클래식 음악을 좋아하는",
        "consumption_preferences_read_frequency": "종종 독서하는",
        "consumption_preferences_read_motive_enjoyment": "재미로 책읽는",
        "consumption_preferences_read_motive_information": "정보 수집을 위해 책을 읽는",
        "consumption_preferences_books_entertainment_magazines": "엔터테인먼트 잡지를 보는",
        "consumption_preferences_books_non_fiction": "논픽션을 읽는",
        "consumption_preferences_read_motive_mandatory": "꼭 필요한 책만 읽는",
        "consumption_preferences_read_motive_relaxation": "휴식을 위해 독서하는",
        "consumption_preferences_books_financial_investing": "투자 관련 서적을 읽는",
        "consumption_preferences_books_autobiographies": "자서전과 전기를 읽는",
        "consumption_preferences_volunteer": "사회공헌을 위해 봉사활동을 하는",
        "consumption_preferences_volunteering_time": "자원봉사활동에 참여한 적이 있는",
        "consumption_preferences_volunteer_learning": "사회공헌적 측면을 알기위해 봉사활동을 하는"
    }

},{}],12:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

    (function() {

        // Baseline setup
        // --------------

        // Establish the root object, `window` in the browser, or `exports` on the server.
        var root = this;

        // Save the previous value of the `_` variable.
        var previousUnderscore = root._;

        // Save bytes in the minified (but not gzipped) version:
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

        // Create quick reference variables for speed access to core prototypes.
        var
            push             = ArrayProto.push,
            slice            = ArrayProto.slice,
            toString         = ObjProto.toString,
            hasOwnProperty   = ObjProto.hasOwnProperty;

        // All **ECMAScript 5** native function implementations that we hope to use
        // are declared here.
        var
            nativeIsArray      = Array.isArray,
            nativeKeys         = Object.keys,
            nativeBind         = FuncProto.bind,
            nativeCreate       = Object.create;

        // Naked function reference for surrogate-prototype-swapping.
        var Ctor = function(){};

        // Create a safe reference to the Underscore object for use below.
        var _ = function(obj) {
            if (obj instanceof _) return obj;
            if (!(this instanceof _)) return new _(obj);
            this._wrapped = obj;
        };

        // Export the Underscore object for **Node.js**, with
        // backwards-compatibility for the old `require()` API. If we're in
        // the browser, add `_` as a global object.
        if (typeof exports !== 'undefined') {
            if (typeof module !== 'undefined' && module.exports) {
                exports = module.exports = _;
            }
            exports._ = _;
        } else {
            root._ = _;
        }

        // Current version.
        _.VERSION = '1.8.3';

        // Internal function that returns an efficient (for current engines) version
        // of the passed-in callback, to be repeatedly applied in other Underscore
        // functions.
        var optimizeCb = function(func, context, argCount) {
            if (context === void 0) return func;
            switch (argCount == null ? 3 : argCount) {
                case 1: return function(value) {
                    return func.call(context, value);
                };
                case 2: return function(value, other) {
                    return func.call(context, value, other);
                };
                case 3: return function(value, index, collection) {
                    return func.call(context, value, index, collection);
                };
                case 4: return function(accumulator, value, index, collection) {
                    return func.call(context, accumulator, value, index, collection);
                };
            }
            return function() {
                return func.apply(context, arguments);
            };
        };

        // A mostly-internal function to generate callbacks that can be applied
        // to each element in a collection, returning the desired result — either
        // identity, an arbitrary callback, a property matcher, or a property accessor.
        var cb = function(value, context, argCount) {
            if (value == null) return _.identity;
            if (_.isFunction(value)) return optimizeCb(value, context, argCount);
            if (_.isObject(value)) return _.matcher(value);
            return _.property(value);
        };
        _.iteratee = function(value, context) {
            return cb(value, context, Infinity);
        };

        // An internal function for creating assigner functions.
        var createAssigner = function(keysFunc, undefinedOnly) {
            return function(obj) {
                var length = arguments.length;
                if (length < 2 || obj == null) return obj;
                for (var index = 1; index < length; index++) {
                    var source = arguments[index],
                        keys = keysFunc(source),
                        l = keys.length;
                    for (var i = 0; i < l; i++) {
                        var key = keys[i];
                        if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
                    }
                }
                return obj;
            };
        };

        // An internal function for creating a new object that inherits from another.
        var baseCreate = function(prototype) {
            if (!_.isObject(prototype)) return {};
            if (nativeCreate) return nativeCreate(prototype);
            Ctor.prototype = prototype;
            var result = new Ctor;
            Ctor.prototype = null;
            return result;
        };

        var property = function(key) {
            return function(obj) {
                return obj == null ? void 0 : obj[key];
            };
        };

        // Helper for collection methods to determine whether a collection
        // should be iterated as an array or as an object
        // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
        // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
        var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
        var getLength = property('length');
        var isArrayLike = function(collection) {
            var length = getLength(collection);
            return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
        };

        // Collection Functions
        // --------------------

        // The cornerstone, an `each` implementation, aka `forEach`.
        // Handles raw objects in addition to array-likes. Treats all
        // sparse array-likes as if they were dense.
        _.each = _.forEach = function(obj, iteratee, context) {
            iteratee = optimizeCb(iteratee, context);
            var i, length;
            if (isArrayLike(obj)) {
                for (i = 0, length = obj.length; i < length; i++) {
                    iteratee(obj[i], i, obj);
                }
            } else {
                var keys = _.keys(obj);
                for (i = 0, length = keys.length; i < length; i++) {
                    iteratee(obj[keys[i]], keys[i], obj);
                }
            }
            return obj;
        };

        // Return the results of applying the iteratee to each element.
        _.map = _.collect = function(obj, iteratee, context) {
            iteratee = cb(iteratee, context);
            var keys = !isArrayLike(obj) && _.keys(obj),
                length = (keys || obj).length,
                results = Array(length);
            for (var index = 0; index < length; index++) {
                var currentKey = keys ? keys[index] : index;
                results[index] = iteratee(obj[currentKey], currentKey, obj);
            }
            return results;
        };

        // Create a reducing function iterating left or right.
        function createReduce(dir) {
            // Optimized iterator function as using arguments.length
            // in the main function will deoptimize the, see #1991.
            function iterator(obj, iteratee, memo, keys, index, length) {
                for (; index >= 0 && index < length; index += dir) {
                    var currentKey = keys ? keys[index] : index;
                    memo = iteratee(memo, obj[currentKey], currentKey, obj);
                }
                return memo;
            }

            return function(obj, iteratee, memo, context) {
                iteratee = optimizeCb(iteratee, context, 4);
                var keys = !isArrayLike(obj) && _.keys(obj),
                    length = (keys || obj).length,
                    index = dir > 0 ? 0 : length - 1;
                // Determine the initial value if none is provided.
                if (arguments.length < 3) {
                    memo = obj[keys ? keys[index] : index];
                    index += dir;
                }
                return iterator(obj, iteratee, memo, keys, index, length);
            };
        }

        // **Reduce** builds up a single result from a list of values, aka `inject`,
        // or `foldl`.
        _.reduce = _.foldl = _.inject = createReduce(1);

        // The right-associative version of reduce, also known as `foldr`.
        _.reduceRight = _.foldr = createReduce(-1);

        // Return the first value which passes a truth test. Aliased as `detect`.
        _.find = _.detect = function(obj, predicate, context) {
            var key;
            if (isArrayLike(obj)) {
                key = _.findIndex(obj, predicate, context);
            } else {
                key = _.findKey(obj, predicate, context);
            }
            if (key !== void 0 && key !== -1) return obj[key];
        };

        // Return all the elements that pass a truth test.
        // Aliased as `select`.
        _.filter = _.select = function(obj, predicate, context) {
            var results = [];
            predicate = cb(predicate, context);
            _.each(obj, function(value, index, list) {
                if (predicate(value, index, list)) results.push(value);
            });
            return results;
        };

        // Return all the elements for which a truth test fails.
        _.reject = function(obj, predicate, context) {
            return _.filter(obj, _.negate(cb(predicate)), context);
        };

        // Determine whether all of the elements match a truth test.
        // Aliased as `all`.
        _.every = _.all = function(obj, predicate, context) {
            predicate = cb(predicate, context);
            var keys = !isArrayLike(obj) && _.keys(obj),
                length = (keys || obj).length;
            for (var index = 0; index < length; index++) {
                var currentKey = keys ? keys[index] : index;
                if (!predicate(obj[currentKey], currentKey, obj)) return false;
            }
            return true;
        };

        // Determine if at least one element in the object matches a truth test.
        // Aliased as `any`.
        _.some = _.any = function(obj, predicate, context) {
            predicate = cb(predicate, context);
            var keys = !isArrayLike(obj) && _.keys(obj),
                length = (keys || obj).length;
            for (var index = 0; index < length; index++) {
                var currentKey = keys ? keys[index] : index;
                if (predicate(obj[currentKey], currentKey, obj)) return true;
            }
            return false;
        };

        // Determine if the array or object contains a given item (using `===`).
        // Aliased as `includes` and `include`.
        _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
            if (!isArrayLike(obj)) obj = _.values(obj);
            if (typeof fromIndex != 'number' || guard) fromIndex = 0;
            return _.indexOf(obj, item, fromIndex) >= 0;
        };

        // Invoke a method (with arguments) on every item in a collection.
        _.invoke = function(obj, method) {
            var args = slice.call(arguments, 2);
            var isFunc = _.isFunction(method);
            return _.map(obj, function(value) {
                var func = isFunc ? method : value[method];
                return func == null ? func : func.apply(value, args);
            });
        };

        // Convenience version of a common use case of `map`: fetching a property.
        _.pluck = function(obj, key) {
            return _.map(obj, _.property(key));
        };

        // Convenience version of a common use case of `filter`: selecting only objects
        // containing specific `key:value` pairs.
        _.where = function(obj, attrs) {
            return _.filter(obj, _.matcher(attrs));
        };

        // Convenience version of a common use case of `find`: getting the first object
        // containing specific `key:value` pairs.
        _.findWhere = function(obj, attrs) {
            return _.find(obj, _.matcher(attrs));
        };

        // Return the maximum element (or element-based computation).
        _.max = function(obj, iteratee, context) {
            var result = -Infinity, lastComputed = -Infinity,
                value, computed;
            if (iteratee == null && obj != null) {
                obj = isArrayLike(obj) ? obj : _.values(obj);
                for (var i = 0, length = obj.length; i < length; i++) {
                    value = obj[i];
                    if (value > result) {
                        result = value;
                    }
                }
            } else {
                iteratee = cb(iteratee, context);
                _.each(obj, function(value, index, list) {
                    computed = iteratee(value, index, list);
                    if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                        result = value;
                        lastComputed = computed;
                    }
                });
            }
            return result;
        };

        // Return the minimum element (or element-based computation).
        _.min = function(obj, iteratee, context) {
            var result = Infinity, lastComputed = Infinity,
                value, computed;
            if (iteratee == null && obj != null) {
                obj = isArrayLike(obj) ? obj : _.values(obj);
                for (var i = 0, length = obj.length; i < length; i++) {
                    value = obj[i];
                    if (value < result) {
                        result = value;
                    }
                }
            } else {
                iteratee = cb(iteratee, context);
                _.each(obj, function(value, index, list) {
                    computed = iteratee(value, index, list);
                    if (computed < lastComputed || computed === Infinity && result === Infinity) {
                        result = value;
                        lastComputed = computed;
                    }
                });
            }
            return result;
        };

        // Shuffle a collection, using the modern version of the
        // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
        _.shuffle = function(obj) {
            var set = isArrayLike(obj) ? obj : _.values(obj);
            var length = set.length;
            var shuffled = Array(length);
            for (var index = 0, rand; index < length; index++) {
                rand = _.random(0, index);
                if (rand !== index) shuffled[index] = shuffled[rand];
                shuffled[rand] = set[index];
            }
            return shuffled;
        };

        // Sample **n** random values from a collection.
        // If **n** is not specified, returns a single random element.
        // The internal `guard` argument allows it to work with `map`.
        _.sample = function(obj, n, guard) {
            if (n == null || guard) {
                if (!isArrayLike(obj)) obj = _.values(obj);
                return obj[_.random(obj.length - 1)];
            }
            return _.shuffle(obj).slice(0, Math.max(0, n));
        };

        // Sort the object's values by a criterion produced by an iteratee.
        _.sortBy = function(obj, iteratee, context) {
            iteratee = cb(iteratee, context);
            return _.pluck(_.map(obj, function(value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iteratee(value, index, list)
                };
            }).sort(function(left, right) {
                var a = left.criteria;
                var b = right.criteria;
                if (a !== b) {
                    if (a > b || a === void 0) return 1;
                    if (a < b || b === void 0) return -1;
                }
                return left.index - right.index;
            }), 'value');
        };

        // An internal function used for aggregate "group by" operations.
        var group = function(behavior) {
            return function(obj, iteratee, context) {
                var result = {};
                iteratee = cb(iteratee, context);
                _.each(obj, function(value, index) {
                    var key = iteratee(value, index, obj);
                    behavior(result, value, key);
                });
                return result;
            };
        };

        // Groups the object's values by a criterion. Pass either a string attribute
        // to group by, or a function that returns the criterion.
        _.groupBy = group(function(result, value, key) {
            if (_.has(result, key)) result[key].push(value); else result[key] = [value];
        });

        // Indexes the object's values by a criterion, similar to `groupBy`, but for
        // when you know that your index values will be unique.
        _.indexBy = group(function(result, value, key) {
            result[key] = value;
        });

        // Counts instances of an object that group by a certain criterion. Pass
        // either a string attribute to count by, or a function that returns the
        // criterion.
        _.countBy = group(function(result, value, key) {
            if (_.has(result, key)) result[key]++; else result[key] = 1;
        });

        // Safely create a real, live array from anything iterable.
        _.toArray = function(obj) {
            if (!obj) return [];
            if (_.isArray(obj)) return slice.call(obj);
            if (isArrayLike(obj)) return _.map(obj, _.identity);
            return _.values(obj);
        };

        // Return the number of elements in an object.
        _.size = function(obj) {
            if (obj == null) return 0;
            return isArrayLike(obj) ? obj.length : _.keys(obj).length;
        };

        // Split a collection into two arrays: one whose elements all satisfy the given
        // predicate, and one whose elements all do not satisfy the predicate.
        _.partition = function(obj, predicate, context) {
            predicate = cb(predicate, context);
            var pass = [], fail = [];
            _.each(obj, function(value, key, obj) {
                (predicate(value, key, obj) ? pass : fail).push(value);
            });
            return [pass, fail];
        };

        // Array Functions
        // ---------------

        // Get the first element of an array. Passing **n** will return the first N
        // values in the array. Aliased as `head` and `take`. The **guard** check
        // allows it to work with `_.map`.
        _.first = _.head = _.take = function(array, n, guard) {
            if (array == null) return void 0;
            if (n == null || guard) return array[0];
            return _.initial(array, array.length - n);
        };

        // Returns everything but the last entry of the array. Especially useful on
        // the arguments object. Passing **n** will return all the values in
        // the array, excluding the last N.
        _.initial = function(array, n, guard) {
            return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
        };

        // Get the last element of an array. Passing **n** will return the last N
        // values in the array.
        _.last = function(array, n, guard) {
            if (array == null) return void 0;
            if (n == null || guard) return array[array.length - 1];
            return _.rest(array, Math.max(0, array.length - n));
        };

        // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
        // Especially useful on the arguments object. Passing an **n** will return
        // the rest N values in the array.
        _.rest = _.tail = _.drop = function(array, n, guard) {
            return slice.call(array, n == null || guard ? 1 : n);
        };

        // Trim out all falsy values from an array.
        _.compact = function(array) {
            return _.filter(array, _.identity);
        };

        // Internal implementation of a recursive `flatten` function.
        var flatten = function(input, shallow, strict, startIndex) {
            var output = [], idx = 0;
            for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
                var value = input[i];
                if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                    //flatten current level of array or arguments object
                    if (!shallow) value = flatten(value, shallow, strict);
                    var j = 0, len = value.length;
                    output.length += len;
                    while (j < len) {
                        output[idx++] = value[j++];
                    }
                } else if (!strict) {
                    output[idx++] = value;
                }
            }
            return output;
        };

        // Flatten out an array, either recursively (by default), or just one level.
        _.flatten = function(array, shallow) {
            return flatten(array, shallow, false);
        };

        // Return a version of the array that does not contain the specified value(s).
        _.without = function(array) {
            return _.difference(array, slice.call(arguments, 1));
        };

        // Produce a duplicate-free version of the array. If the array has already
        // been sorted, you have the option of using a faster algorithm.
        // Aliased as `unique`.
        _.uniq = _.unique = function(array, isSorted, iteratee, context) {
            if (!_.isBoolean(isSorted)) {
                context = iteratee;
                iteratee = isSorted;
                isSorted = false;
            }
            if (iteratee != null) iteratee = cb(iteratee, context);
            var result = [];
            var seen = [];
            for (var i = 0, length = getLength(array); i < length; i++) {
                var value = array[i],
                    computed = iteratee ? iteratee(value, i, array) : value;
                if (isSorted) {
                    if (!i || seen !== computed) result.push(value);
                    seen = computed;
                } else if (iteratee) {
                    if (!_.contains(seen, computed)) {
                        seen.push(computed);
                        result.push(value);
                    }
                } else if (!_.contains(result, value)) {
                    result.push(value);
                }
            }
            return result;
        };

        // Produce an array that contains the union: each distinct element from all of
        // the passed-in arrays.
        _.union = function() {
            return _.uniq(flatten(arguments, true, true));
        };

        // Produce an array that contains every item shared between all the
        // passed-in arrays.
        _.intersection = function(array) {
            var result = [];
            var argsLength = arguments.length;
            for (var i = 0, length = getLength(array); i < length; i++) {
                var item = array[i];
                if (_.contains(result, item)) continue;
                for (var j = 1; j < argsLength; j++) {
                    if (!_.contains(arguments[j], item)) break;
                }
                if (j === argsLength) result.push(item);
            }
            return result;
        };

        // Take the difference between one array and a number of other arrays.
        // Only the elements present in just the first array will remain.
        _.difference = function(array) {
            var rest = flatten(arguments, true, true, 1);
            return _.filter(array, function(value){
                return !_.contains(rest, value);
            });
        };

        // Zip together multiple lists into a single array -- elements that share
        // an index go together.
        _.zip = function() {
            return _.unzip(arguments);
        };

        // Complement of _.zip. Unzip accepts an array of arrays and groups
        // each array's elements on shared indices
        _.unzip = function(array) {
            var length = array && _.max(array, getLength).length || 0;
            var result = Array(length);

            for (var index = 0; index < length; index++) {
                result[index] = _.pluck(array, index);
            }
            return result;
        };

        // Converts lists into objects. Pass either a single array of `[key, value]`
        // pairs, or two parallel arrays of the same length -- one of keys, and one of
        // the corresponding values.
        _.object = function(list, values) {
            var result = {};
            for (var i = 0, length = getLength(list); i < length; i++) {
                if (values) {
                    result[list[i]] = values[i];
                } else {
                    result[list[i][0]] = list[i][1];
                }
            }
            return result;
        };

        // Generator function to create the findIndex and findLastIndex functions
        function createPredicateIndexFinder(dir) {
            return function(array, predicate, context) {
                predicate = cb(predicate, context);
                var length = getLength(array);
                var index = dir > 0 ? 0 : length - 1;
                for (; index >= 0 && index < length; index += dir) {
                    if (predicate(array[index], index, array)) return index;
                }
                return -1;
            };
        }

        // Returns the first index on an array-like that passes a predicate test
        _.findIndex = createPredicateIndexFinder(1);
        _.findLastIndex = createPredicateIndexFinder(-1);

        // Use a comparator function to figure out the smallest index at which
        // an object should be inserted so as to maintain order. Uses binary search.
        _.sortedIndex = function(array, obj, iteratee, context) {
            iteratee = cb(iteratee, context, 1);
            var value = iteratee(obj);
            var low = 0, high = getLength(array);
            while (low < high) {
                var mid = Math.floor((low + high) / 2);
                if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
            }
            return low;
        };

        // Generator function to create the indexOf and lastIndexOf functions
        function createIndexFinder(dir, predicateFind, sortedIndex) {
            return function(array, item, idx) {
                var i = 0, length = getLength(array);
                if (typeof idx == 'number') {
                    if (dir > 0) {
                        i = idx >= 0 ? idx : Math.max(idx + length, i);
                    } else {
                        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                    }
                } else if (sortedIndex && idx && length) {
                    idx = sortedIndex(array, item);
                    return array[idx] === item ? idx : -1;
                }
                if (item !== item) {
                    idx = predicateFind(slice.call(array, i, length), _.isNaN);
                    return idx >= 0 ? idx + i : -1;
                }
                for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
                    if (array[idx] === item) return idx;
                }
                return -1;
            };
        }

        // Return the position of the first occurrence of an item in an array,
        // or -1 if the item is not included in the array.
        // If the array is large and already in sort order, pass `true`
        // for **isSorted** to use binary search.
        _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
        _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

        // Generate an integer Array containing an arithmetic progression. A port of
        // the native Python `range()` function. See
        // [the Python documentation](http://docs.python.org/library/functions.html#range).
        _.range = function(start, stop, step) {
            if (stop == null) {
                stop = start || 0;
                start = 0;
            }
            step = step || 1;

            var length = Math.max(Math.ceil((stop - start) / step), 0);
            var range = Array(length);

            for (var idx = 0; idx < length; idx++, start += step) {
                range[idx] = start;
            }

            return range;
        };

        // Function (ahem) Functions
        // ------------------

        // Determines whether to execute a function as a constructor
        // or a normal function with the provided arguments
        var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
            if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
            var self = baseCreate(sourceFunc.prototype);
            var result = sourceFunc.apply(self, args);
            if (_.isObject(result)) return result;
            return self;
        };

        // Create a function bound to a given object (assigning `this`, and arguments,
        // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
        // available.
        _.bind = function(func, context) {
            if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
            if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
            var args = slice.call(arguments, 2);
            var bound = function() {
                return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
            };
            return bound;
        };

        // Partially apply a function by creating a version that has had some of its
        // arguments pre-filled, without changing its dynamic `this` context. _ acts
        // as a placeholder, allowing any combination of arguments to be pre-filled.
        _.partial = function(func) {
            var boundArgs = slice.call(arguments, 1);
            var bound = function() {
                var position = 0, length = boundArgs.length;
                var args = Array(length);
                for (var i = 0; i < length; i++) {
                    args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
                }
                while (position < arguments.length) args.push(arguments[position++]);
                return executeBound(func, bound, this, this, args);
            };
            return bound;
        };

        // Bind a number of an object's methods to that object. Remaining arguments
        // are the method names to be bound. Useful for ensuring that all callbacks
        // defined on an object belong to it.
        _.bindAll = function(obj) {
            var i, length = arguments.length, key;
            if (length <= 1) throw new Error('bindAll must be passed function names');
            for (i = 1; i < length; i++) {
                key = arguments[i];
                obj[key] = _.bind(obj[key], obj);
            }
            return obj;
        };

        // Memoize an expensive function by storing its results.
        _.memoize = function(func, hasher) {
            var memoize = function(key) {
                var cache = memoize.cache;
                var address = '' + (hasher ? hasher.apply(this, arguments) : key);
                if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
                return cache[address];
            };
            memoize.cache = {};
            return memoize;
        };

        // Delays a function for the given number of milliseconds, and then calls
        // it with the arguments supplied.
        _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function(){
                return func.apply(null, args);
            }, wait);
        };

        // Defers a function, scheduling it to run after the current call stack has
        // cleared.
        _.defer = _.partial(_.delay, _, 1);

        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time. Normally, the throttled function will run
        // as much as it can, without ever going more than once per `wait` duration;
        // but if you'd like to disable the execution on the leading edge, pass
        // `{leading: false}`. To disable execution on the trailing edge, ditto.
        _.throttle = function(func, wait, options) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) options = {};
            var later = function() {
                previous = options.leading === false ? 0 : _.now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            };
            return function() {
                var now = _.now();
                if (!previous && options.leading === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        };

        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        _.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result;

            var later = function() {
                var last = _.now() - timestamp;

                if (last < wait && last >= 0) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    }
                }
            };

            return function() {
                context = this;
                args = arguments;
                timestamp = _.now();
                var callNow = immediate && !timeout;
                if (!timeout) timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                    context = args = null;
                }

                return result;
            };
        };

        // Returns the first function passed as an argument to the second,
        // allowing you to adjust arguments, run code before and after, and
        // conditionally execute the original function.
        _.wrap = function(func, wrapper) {
            return _.partial(wrapper, func);
        };

        // Returns a negated version of the passed-in predicate.
        _.negate = function(predicate) {
            return function() {
                return !predicate.apply(this, arguments);
            };
        };

        // Returns a function that is the composition of a list of functions, each
        // consuming the return value of the function that follows.
        _.compose = function() {
            var args = arguments;
            var start = args.length - 1;
            return function() {
                var i = start;
                var result = args[start].apply(this, arguments);
                while (i--) result = args[i].call(this, result);
                return result;
            };
        };

        // Returns a function that will only be executed on and after the Nth call.
        _.after = function(times, func) {
            return function() {
                if (--times < 1) {
                    return func.apply(this, arguments);
                }
            };
        };

        // Returns a function that will only be executed up to (but not including) the Nth call.
        _.before = function(times, func) {
            var memo;
            return function() {
                if (--times > 0) {
                    memo = func.apply(this, arguments);
                }
                if (times <= 1) func = null;
                return memo;
            };
        };

        // Returns a function that will be executed at most one time, no matter how
        // often you call it. Useful for lazy initialization.
        _.once = _.partial(_.before, 2);

        // Object Functions
        // ----------------

        // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
        var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
        var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

        function collectNonEnumProps(obj, keys) {
            var nonEnumIdx = nonEnumerableProps.length;
            var constructor = obj.constructor;
            var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

            // Constructor is a special case.
            var prop = 'constructor';
            if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

            while (nonEnumIdx--) {
                prop = nonEnumerableProps[nonEnumIdx];
                if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
                    keys.push(prop);
                }
            }
        }

        // Retrieve the names of an object's own properties.
        // Delegates to **ECMAScript 5**'s native `Object.keys`
        _.keys = function(obj) {
            if (!_.isObject(obj)) return [];
            if (nativeKeys) return nativeKeys(obj);
            var keys = [];
            for (var key in obj) if (_.has(obj, key)) keys.push(key);
            // Ahem, IE < 9.
            if (hasEnumBug) collectNonEnumProps(obj, keys);
            return keys;
        };

        // Retrieve all the property names of an object.
        _.allKeys = function(obj) {
            if (!_.isObject(obj)) return [];
            var keys = [];
            for (var key in obj) keys.push(key);
            // Ahem, IE < 9.
            if (hasEnumBug) collectNonEnumProps(obj, keys);
            return keys;
        };

        // Retrieve the values of an object's properties.
        _.values = function(obj) {
            var keys = _.keys(obj);
            var length = keys.length;
            var values = Array(length);
            for (var i = 0; i < length; i++) {
                values[i] = obj[keys[i]];
            }
            return values;
        };

        // Returns the results of applying the iteratee to each element of the object
        // In contrast to _.map it returns an object
        _.mapObject = function(obj, iteratee, context) {
            iteratee = cb(iteratee, context);
            var keys =  _.keys(obj),
                length = keys.length,
                results = {},
                currentKey;
            for (var index = 0; index < length; index++) {
                currentKey = keys[index];
                results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
            }
            return results;
        };

        // Convert an object into a list of `[key, value]` pairs.
        _.pairs = function(obj) {
            var keys = _.keys(obj);
            var length = keys.length;
            var pairs = Array(length);
            for (var i = 0; i < length; i++) {
                pairs[i] = [keys[i], obj[keys[i]]];
            }
            return pairs;
        };

        // Invert the keys and values of an object. The values must be serializable.
        _.invert = function(obj) {
            var result = {};
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                result[obj[keys[i]]] = keys[i];
            }
            return result;
        };

        // Return a sorted list of the function names available on the object.
        // Aliased as `methods`
        _.functions = _.methods = function(obj) {
            var names = [];
            for (var key in obj) {
                if (_.isFunction(obj[key])) names.push(key);
            }
            return names.sort();
        };

        // Extend a given object with all the properties in passed-in object(s).
        _.extend = createAssigner(_.allKeys);

        // Assigns a given object with all the own properties in the passed-in object(s)
        // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        _.extendOwn = _.assign = createAssigner(_.keys);

        // Returns the first key on an object that passes a predicate test
        _.findKey = function(obj, predicate, context) {
            predicate = cb(predicate, context);
            var keys = _.keys(obj), key;
            for (var i = 0, length = keys.length; i < length; i++) {
                key = keys[i];
                if (predicate(obj[key], key, obj)) return key;
            }
        };

        // Return a copy of the object only containing the whitelisted properties.
        _.pick = function(object, oiteratee, context) {
            var result = {}, obj = object, iteratee, keys;
            if (obj == null) return result;
            if (_.isFunction(oiteratee)) {
                keys = _.allKeys(obj);
                iteratee = optimizeCb(oiteratee, context);
            } else {
                keys = flatten(arguments, false, false, 1);
                iteratee = function(value, key, obj) { return key in obj; };
                obj = Object(obj);
            }
            for (var i = 0, length = keys.length; i < length; i++) {
                var key = keys[i];
                var value = obj[key];
                if (iteratee(value, key, obj)) result[key] = value;
            }
            return result;
        };

        // Return a copy of the object without the blacklisted properties.
        _.omit = function(obj, iteratee, context) {
            if (_.isFunction(iteratee)) {
                iteratee = _.negate(iteratee);
            } else {
                var keys = _.map(flatten(arguments, false, false, 1), String);
                iteratee = function(value, key) {
                    return !_.contains(keys, key);
                };
            }
            return _.pick(obj, iteratee, context);
        };

        // Fill in a given object with default properties.
        _.defaults = createAssigner(_.allKeys, true);

        // Creates an object that inherits from the given prototype object.
        // If additional properties are provided then they will be added to the
        // created object.
        _.create = function(prototype, props) {
            var result = baseCreate(prototype);
            if (props) _.extendOwn(result, props);
            return result;
        };

        // Create a (shallow-cloned) duplicate of an object.
        _.clone = function(obj) {
            if (!_.isObject(obj)) return obj;
            return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
        };

        // Invokes interceptor with the obj, and then returns obj.
        // The primary purpose of this method is to "tap into" a method chain, in
        // order to perform operations on intermediate results within the chain.
        _.tap = function(obj, interceptor) {
            interceptor(obj);
            return obj;
        };

        // Returns whether an object has a given set of `key:value` pairs.
        _.isMatch = function(object, attrs) {
            var keys = _.keys(attrs), length = keys.length;
            if (object == null) return !length;
            var obj = Object(object);
            for (var i = 0; i < length; i++) {
                var key = keys[i];
                if (attrs[key] !== obj[key] || !(key in obj)) return false;
            }
            return true;
        };


        // Internal recursive comparison function for `isEqual`.
        var eq = function(a, b, aStack, bStack) {
            // Identical objects are equal. `0 === -0`, but they aren't identical.
            // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
            if (a === b) return a !== 0 || 1 / a === 1 / b;
            // A strict comparison is necessary because `null == undefined`.
            if (a == null || b == null) return a === b;
            // Unwrap any wrapped objects.
            if (a instanceof _) a = a._wrapped;
            if (b instanceof _) b = b._wrapped;
            // Compare `[[Class]]` names.
            var className = toString.call(a);
            if (className !== toString.call(b)) return false;
            switch (className) {
                // Strings, numbers, regular expressions, dates, and booleans are compared by value.
                case '[object RegExp]':
                // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
                case '[object String]':
                    // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                    // equivalent to `new String("5")`.
                    return '' + a === '' + b;
                case '[object Number]':
                    // `NaN`s are equivalent, but non-reflexive.
                    // Object(NaN) is equivalent to NaN
                    if (+a !== +a) return +b !== +b;
                    // An `egal` comparison is performed for other numeric values.
                    return +a === 0 ? 1 / +a === 1 / b : +a === +b;
                case '[object Date]':
                case '[object Boolean]':
                    // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                    // millisecond representations. Note that invalid dates with millisecond representations
                    // of `NaN` are not equivalent.
                    return +a === +b;
            }

            var areArrays = className === '[object Array]';
            if (!areArrays) {
                if (typeof a != 'object' || typeof b != 'object') return false;

                // Objects with different constructors are not equivalent, but `Object`s or `Array`s
                // from different frames are.
                var aCtor = a.constructor, bCtor = b.constructor;
                if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                        _.isFunction(bCtor) && bCtor instanceof bCtor)
                    && ('constructor' in a && 'constructor' in b)) {
                    return false;
                }
            }
            // Assume equality for cyclic structures. The algorithm for detecting cyclic
            // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

            // Initializing stack of traversed objects.
            // It's done here since we only need them for objects and arrays comparison.
            aStack = aStack || [];
            bStack = bStack || [];
            var length = aStack.length;
            while (length--) {
                // Linear search. Performance is inversely proportional to the number of
                // unique nested structures.
                if (aStack[length] === a) return bStack[length] === b;
            }

            // Add the first object to the stack of traversed objects.
            aStack.push(a);
            bStack.push(b);

            // Recursively compare objects and arrays.
            if (areArrays) {
                // Compare array lengths to determine if a deep comparison is necessary.
                length = a.length;
                if (length !== b.length) return false;
                // Deep compare the contents, ignoring non-numeric properties.
                while (length--) {
                    if (!eq(a[length], b[length], aStack, bStack)) return false;
                }
            } else {
                // Deep compare objects.
                var keys = _.keys(a), key;
                length = keys.length;
                // Ensure that both objects contain the same number of properties before comparing deep equality.
                if (_.keys(b).length !== length) return false;
                while (length--) {
                    // Deep compare each member
                    key = keys[length];
                    if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
                }
            }
            // Remove the first object from the stack of traversed objects.
            aStack.pop();
            bStack.pop();
            return true;
        };

        // Perform a deep comparison to check if two objects are equal.
        _.isEqual = function(a, b) {
            return eq(a, b);
        };

        // Is a given array, string, or object empty?
        // An "empty" object has no enumerable own-properties.
        _.isEmpty = function(obj) {
            if (obj == null) return true;
            if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
            return _.keys(obj).length === 0;
        };

        // Is a given value a DOM element?
        _.isElement = function(obj) {
            return !!(obj && obj.nodeType === 1);
        };

        // Is a given value an array?
        // Delegates to ECMA5's native Array.isArray
        _.isArray = nativeIsArray || function(obj) {
            return toString.call(obj) === '[object Array]';
        };

        // Is a given variable an object?
        _.isObject = function(obj) {
            var type = typeof obj;
            return type === 'function' || type === 'object' && !!obj;
        };

        // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
        _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
            _['is' + name] = function(obj) {
                return toString.call(obj) === '[object ' + name + ']';
            };
        });

        // Define a fallback version of the method in browsers (ahem, IE < 9), where
        // there isn't any inspectable "Arguments" type.
        if (!_.isArguments(arguments)) {
            _.isArguments = function(obj) {
                return _.has(obj, 'callee');
            };
        }

        // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
        // IE 11 (#1621), and in Safari 8 (#1929).
        if (typeof /./ != 'function' && typeof Int8Array != 'object') {
            _.isFunction = function(obj) {
                return typeof obj == 'function' || false;
            };
        }

        // Is a given object a finite number?
        _.isFinite = function(obj) {
            return isFinite(obj) && !isNaN(parseFloat(obj));
        };

        // Is the given value `NaN`? (NaN is the only number which does not equal itself).
        _.isNaN = function(obj) {
            return _.isNumber(obj) && obj !== +obj;
        };

        // Is a given value a boolean?
        _.isBoolean = function(obj) {
            return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
        };

        // Is a given value equal to null?
        _.isNull = function(obj) {
            return obj === null;
        };

        // Is a given variable undefined?
        _.isUndefined = function(obj) {
            return obj === void 0;
        };

        // Shortcut function for checking if an object has a given property directly
        // on itself (in other words, not on a prototype).
        _.has = function(obj, key) {
            return obj != null && hasOwnProperty.call(obj, key);
        };

        // Utility Functions
        // -----------------

        // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
        // previous owner. Returns a reference to the Underscore object.
        _.noConflict = function() {
            root._ = previousUnderscore;
            return this;
        };

        // Keep the identity function around for default iteratees.
        _.identity = function(value) {
            return value;
        };

        // Predicate-generating functions. Often useful outside of Underscore.
        _.constant = function(value) {
            return function() {
                return value;
            };
        };

        _.noop = function(){};

        _.property = property;

        // Generates a function for a given object that returns a given property.
        _.propertyOf = function(obj) {
            return obj == null ? function(){} : function(key) {
                return obj[key];
            };
        };

        // Returns a predicate for checking whether an object has a given set of
        // `key:value` pairs.
        _.matcher = _.matches = function(attrs) {
            attrs = _.extendOwn({}, attrs);
            return function(obj) {
                return _.isMatch(obj, attrs);
            };
        };

        // Run a function **n** times.
        _.times = function(n, iteratee, context) {
            var accum = Array(Math.max(0, n));
            iteratee = optimizeCb(iteratee, context, 1);
            for (var i = 0; i < n; i++) accum[i] = iteratee(i);
            return accum;
        };

        // Return a random integer between min and max (inclusive).
        _.random = function(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        };

        // A (possibly faster) way to get the current timestamp as an integer.
        _.now = Date.now || function() {
            return new Date().getTime();
        };

        // List of HTML entities for escaping.
        var escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;'
        };
        var unescapeMap = _.invert(escapeMap);

        // Functions for escaping and unescaping strings to/from HTML interpolation.
        var createEscaper = function(map) {
            var escaper = function(match) {
                return map[match];
            };
            // Regexes for identifying a key that needs to be escaped
            var source = '(?:' + _.keys(map).join('|') + ')';
            var testRegexp = RegExp(source);
            var replaceRegexp = RegExp(source, 'g');
            return function(string) {
                string = string == null ? '' : '' + string;
                return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
            };
        };
        _.escape = createEscaper(escapeMap);
        _.unescape = createEscaper(unescapeMap);

        // If the value of the named `property` is a function then invoke it with the
        // `object` as context; otherwise, return it.
        _.result = function(object, property, fallback) {
            var value = object == null ? void 0 : object[property];
            if (value === void 0) {
                value = fallback;
            }
            return _.isFunction(value) ? value.call(object) : value;
        };

        // Generate a unique integer id (unique within the entire client session).
        // Useful for temporary DOM ids.
        var idCounter = 0;
        _.uniqueId = function(prefix) {
            var id = ++idCounter + '';
            return prefix ? prefix + id : id;
        };

        // By default, Underscore uses ERB-style template delimiters, change the
        // following template settings to use alternative delimiters.
        _.templateSettings = {
            evaluate    : /<%([\s\S]+?)%>/g,
            interpolate : /<%=([\s\S]+?)%>/g,
            escape      : /<%-([\s\S]+?)%>/g
        };

        // When customizing `templateSettings`, if you don't want to define an
        // interpolation, evaluation or escaping regex, we need one that is
        // guaranteed not to match.
        var noMatch = /(.)^/;

        // Certain characters need to be escaped so that they can be put into a
        // string literal.
        var escapes = {
            "'":      "'",
            '\\':     '\\',
            '\r':     'r',
            '\n':     'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        };

        var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

        var escapeChar = function(match) {
            return '\\' + escapes[match];
        };

        // JavaScript micro-templating, similar to John Resig's implementation.
        // Underscore templating handles arbitrary delimiters, preserves whitespace,
        // and correctly escapes quotes within interpolated code.
        // NB: `oldSettings` only exists for backwards compatibility.
        _.template = function(text, settings, oldSettings) {
            if (!settings && oldSettings) settings = oldSettings;
            settings = _.defaults({}, settings, _.templateSettings);

            // Combine delimiters into one regular expression via alternation.
            var matcher = RegExp([
                (settings.escape || noMatch).source,
                (settings.interpolate || noMatch).source,
                (settings.evaluate || noMatch).source
            ].join('|') + '|$', 'g');

            // Compile the template source, escaping string literals appropriately.
            var index = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                source += text.slice(index, offset).replace(escaper, escapeChar);
                index = offset + match.length;

                if (escape) {
                    source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
                } else if (interpolate) {
                    source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
                } else if (evaluate) {
                    source += "';\n" + evaluate + "\n__p+='";
                }

                // Adobe VMs need the match returned to produce the correct offest.
                return match;
            });
            source += "';\n";

            // If a variable is not specified, place data values in local scope.
            if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

            source = "var __t,__p='',__j=Array.prototype.join," +
                "print=function(){__p+=__j.call(arguments,'');};\n" +
                source + 'return __p;\n';

            try {
                var render = new Function(settings.variable || 'obj', '_', source);
            } catch (e) {
                e.source = source;
                throw e;
            }

            var template = function(data) {
                return render.call(this, data, _);
            };

            // Provide the compiled source as a convenience for precompilation.
            var argument = settings.variable || 'obj';
            template.source = 'function(' + argument + '){\n' + source + '}';

            return template;
        };

        // Add a "chain" function. Start chaining a wrapped Underscore object.
        _.chain = function(obj) {
            var instance = _(obj);
            instance._chain = true;
            return instance;
        };

        // OOP
        // ---------------
        // If Underscore is called as a function, it returns a wrapped object that
        // can be used OO-style. This wrapper holds altered versions of all the
        // underscore functions. Wrapped objects may be chained.

        // Helper function to continue chaining intermediate results.
        var result = function(instance, obj) {
            return instance._chain ? _(obj).chain() : obj;
        };

        // Add your own custom functions to the Underscore object.
        _.mixin = function(obj) {
            _.each(_.functions(obj), function(name) {
                var func = _[name] = obj[name];
                _.prototype[name] = function() {
                    var args = [this._wrapped];
                    push.apply(args, arguments);
                    return result(this, func.apply(_, args));
                };
            });
        };

        // Add all of the Underscore functions to the wrapper object.
        _.mixin(_);

        // Add all mutator Array functions to the wrapper.
        _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                var obj = this._wrapped;
                method.apply(obj, arguments);
                if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
                return result(this, obj);
            };
        });

        // Add all accessor Array functions to the wrapper.
        _.each(['concat', 'join', 'slice'], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                return result(this, method.apply(this._wrapped, arguments));
            };
        });

        // Extracts the result from a wrapped and chained object.
        _.prototype.value = function() {
            return this._wrapped;
        };

        // Provide unwrapping proxy for some methods used in engine operations
        // such as arithmetic and JSON stringification.
        _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

        _.prototype.toString = function() {
            return '' + this._wrapped;
        };

        // AMD registration happens at the end for compatibility with AMD loaders
        // that may not enforce next-turn semantics on modules. Even though general
        // practice for AMD registration is to be anonymous, underscore registers
        // as a named module because, like jQuery, it is a base library that is
        // popular enough to be bundled in a third party lib, but not be part of
        // an AMD load request. Those cases could generate an error when an
        // anonymous define() is called outside of a loader request.
        if (typeof define === 'function' && define.amd) {
            define('underscore', [], function() {
                return _;
            });
        }
    }.call(this));

},{}]},{},[7])(7)
});

var profile = {"word_count":15128,"processed_language":"en","personality":[{"trait_id":"big5_openness","name":"Openness","category":"personality","percentile":0.8048087217136348,"children":[{"trait_id":"facet_adventurousness","name":"Adventurousness","category":"personality","percentile":0.9045974768772631},{"trait_id":"facet_artistic_interests","name":"Artistic interests","category":"personality","percentile":0.979020151157223},{"trait_id":"facet_emotionality","name":"Emotionality","category":"personality","percentile":0.9949131538964932},{"trait_id":"facet_imagination","name":"Imagination","category":"personality","percentile":0.8714517724206985},{"trait_id":"facet_intellect","name":"Intellect","category":"personality","percentile":0.8835958016905783},{"trait_id":"facet_liberalism","name":"Authority-challenging","category":"personality","percentile":0.6486344859769609}]},{"trait_id":"big5_conscientiousness","name":"Conscientiousness","category":"personality","percentile":0.8102947333861588,"children":[{"trait_id":"facet_achievement_striving","name":"Achievement striving","category":"personality","percentile":0.8447942535266787},{"trait_id":"facet_cautiousness","name":"Cautiousness","category":"personality","percentile":0.7225672485998437},{"trait_id":"facet_dutifulness","name":"Dutifulness","category":"personality","percentile":0.8414459590561325},{"trait_id":"facet_orderliness","name":"Orderliness","category":"personality","percentile":0.6154468578992052},{"trait_id":"facet_self_discipline","name":"Self-discipline","category":"personality","percentile":0.8344273426362091},{"trait_id":"facet_self_efficacy","name":"Self-efficacy","category":"personality","percentile":0.7041262378443771}]},{"trait_id":"big5_extraversion","name":"Extraversion","category":"personality","percentile":0.642558032110975,"children":[{"trait_id":"facet_activity_level","name":"Activity level","category":"personality","percentile":0.8860397181738027},{"trait_id":"facet_assertiveness","name":"Assertiveness","category":"personality","percentile":0.6742837190539857},{"trait_id":"facet_cheerfulness","name":"Cheerfulness","category":"personality","percentile":0.9430030813836863},{"trait_id":"facet_excitement_seeking","name":"Excitement-seeking","category":"personality","percentile":0.5936685312560723},{"trait_id":"facet_friendliness","name":"Outgoing","category":"personality","percentile":0.9603396711358586},{"trait_id":"facet_gregariousness","name":"Gregariousness","category":"personality","percentile":0.6570127643040208}]},{"trait_id":"big5_agreeableness","name":"Agreeableness","category":"personality","percentile":0.9441476521819407,"children":[{"trait_id":"facet_altruism","name":"Altruism","category":"personality","percentile":0.9925983032671806},{"trait_id":"facet_cooperation","name":"Cooperation","category":"personality","percentile":0.8640865926210066},{"trait_id":"facet_modesty","name":"Modesty","category":"personality","percentile":0.7777409427743414},{"trait_id":"facet_morality","name":"Uncompromising","category":"personality","percentile":0.8952857419791408},{"trait_id":"facet_sympathy","name":"Sympathy","category":"personality","percentile":0.9946593546657979},{"trait_id":"facet_trust","name":"Trust","category":"personality","percentile":0.9031062247867181}]},{"trait_id":"big5_neuroticism","name":"Emotional range","category":"personality","percentile":0.5011424258038935,"children":[{"trait_id":"facet_anger","name":"Fiery","category":"personality","percentile":0.16919226490209904},{"trait_id":"facet_anxiety","name":"Prone to worry","category":"personality","percentile":0.4213023245514933},{"trait_id":"facet_depression","name":"Melancholy","category":"personality","percentile":0.1490766395109473},{"trait_id":"facet_immoderation","name":"Immoderation","category":"personality","percentile":0.27027043771581183},{"trait_id":"facet_self_consciousness","name":"Self-consciousness","category":"personality","percentile":0.2932568173816944},{"trait_id":"facet_vulnerability","name":"Susceptible to stress","category":"personality","percentile":0.3862483573834662}]}],"needs":[{"trait_id":"need_challenge","name":"Challenge","category":"needs","percentile":0.6699981453953803},{"trait_id":"need_closeness","name":"Closeness","category":"needs","percentile":0.8366389466400306},{"trait_id":"need_curiosity","name":"Curiosity","category":"needs","percentile":0.9338147737801343},{"trait_id":"need_excitement","name":"Excitement","category":"needs","percentile":0.7368905165835662},{"trait_id":"need_harmony","name":"Harmony","category":"needs","percentile":0.9681096581919224},{"trait_id":"need_ideal","name":"Ideal","category":"needs","percentile":0.6846651401449015},{"trait_id":"need_liberty","name":"Liberty","category":"needs","percentile":0.7944143551559404},{"trait_id":"need_love","name":"Love","category":"needs","percentile":0.8187640742747349},{"trait_id":"need_practicality","name":"Practicality","category":"needs","percentile":0.3446986354072157},{"trait_id":"need_self_expression","name":"Self-expression","category":"needs","percentile":0.8698181973941164},{"trait_id":"need_stability","name":"Stability","category":"needs","percentile":0.8705205013979391},{"trait_id":"need_structure","name":"Structure","category":"needs","percentile":0.7464328575416121}],"values":[{"trait_id":"value_conservation","name":"Conservation","category":"values","percentile":0.8866722687387552},{"trait_id":"value_openness_to_change","name":"Openness to change","category":"values","percentile":0.8696769334020679},{"trait_id":"value_hedonism","name":"Hedonism","category":"values","percentile":0.4401896345423686},{"trait_id":"value_self_enhancement","name":"Self-enhancement","category":"values","percentile":0.6488575994223287},{"trait_id":"value_self_transcendence","name":"Self-transcendence","category":"values","percentile":0.8280778884301451}],"behavior":[{"trait_id":"behavior_sunday","name":"Sunday","category":"behavior","percentage":0.2217782217782218},{"trait_id":"behavior_monday","name":"Monday","category":"behavior","percentage":0.42157842157842157},{"trait_id":"behavior_tuesday","name":"Tuesday","category":"behavior","percentage":0.07092907092907093},{"trait_id":"behavior_wednesday","name":"Wednesday","category":"behavior","percentage":0.01098901098901099},{"trait_id":"behavior_thursday","name":"Thursday","category":"behavior","percentage":0.12087912087912088},{"trait_id":"behavior_friday","name":"Friday","category":"behavior","percentage":0.07692307692307693},{"trait_id":"behavior_saturday","name":"Saturday","category":"behavior","percentage":0.07692307692307693},{"trait_id":"behavior_0000","name":"0:00 am","category":"behavior","percentage":0.4515484515484515},{"trait_id":"behavior_0100","name":"1:00 am","category":"behavior","percentage":0.12087912087912088},{"trait_id":"behavior_0200","name":"2:00 am","category":"behavior","percentage":0.02097902097902098},{"trait_id":"behavior_0300","name":"3:00 am","category":"behavior","percentage":0.0939060939060939},{"trait_id":"behavior_0400","name":"4:00 am","category":"behavior","percentage":0.01998001998001998},{"trait_id":"behavior_0500","name":"5:00 am","category":"behavior","percentage":0},{"trait_id":"behavior_0600","name":"6:00 am","category":"behavior","percentage":0},{"trait_id":"behavior_0700","name":"7:00 am","category":"behavior","percentage":0.01098901098901099},{"trait_id":"behavior_0800","name":"8:00 am","category":"behavior","percentage":0},{"trait_id":"behavior_0900","name":"9:00 am","category":"behavior","percentage":0},{"trait_id":"behavior_1000","name":"10:00 am","category":"behavior","percentage":0},{"trait_id":"behavior_1100","name":"11:00 am","category":"behavior","percentage":0},{"trait_id":"behavior_1200","name":"12:00 pm","category":"behavior","percentage":0},{"trait_id":"behavior_1300","name":"1:00 pm","category":"behavior","percentage":0},{"trait_id":"behavior_1400","name":"2:00 pm","category":"behavior","percentage":0},{"trait_id":"behavior_1500","name":"3:00 pm","category":"behavior","percentage":0.02197802197802198},{"trait_id":"behavior_1600","name":"4:00 pm","category":"behavior","percentage":0.02197802197802198},{"trait_id":"behavior_1700","name":"5:00 pm","category":"behavior","percentage":0.03196803196803197},{"trait_id":"behavior_1800","name":"6:00 pm","category":"behavior","percentage":0.00999000999000999},{"trait_id":"behavior_1900","name":"7:00 pm","category":"behavior","percentage":0.01098901098901099},{"trait_id":"behavior_2000","name":"8:00 pm","category":"behavior","percentage":0.02197802197802198},{"trait_id":"behavior_2100","name":"9:00 pm","category":"behavior","percentage":0},{"trait_id":"behavior_2200","name":"10:00 pm","category":"behavior","percentage":0.04095904095904096},{"trait_id":"behavior_2300","name":"11:00 pm","category":"behavior","percentage":0.12187812187812187}],"consumption_preferences":[{"consumption_preference_category_id":"consumption_preferences_shopping","name":"Purchasing Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_automobile_ownership_cost","name":"Likely to be sensitive to ownership cost when buying automobiles","score":0},{"consumption_preference_id":"consumption_preferences_automobile_safety","name":"Likely to prefer safety when buying automobiles","score":0.5},{"consumption_preference_id":"consumption_preferences_clothes_quality","name":"Likely to prefer quality when buying clothes","score":0},{"consumption_preference_id":"consumption_preferences_clothes_style","name":"Likely to prefer style when buying clothes","score":1},{"consumption_preference_id":"consumption_preferences_clothes_comfort","name":"Likely to prefer comfort when buying clothes","score":0},{"consumption_preference_id":"consumption_preferences_influence_brand_name","name":"Likely to be influenced by brand name when making product purchases","score":0.5},{"consumption_preference_id":"consumption_preferences_influence_utility","name":"Likely to be influenced by product utility when making product purchases","score":0.5},{"consumption_preference_id":"consumption_preferences_influence_online_ads","name":"Likely to be influenced by online ads when making product purchases","score":1},{"consumption_preference_id":"consumption_preferences_influence_social_media","name":"Likely to be influenced by social media when making product purchases","score":1},{"consumption_preference_id":"consumption_preferences_influence_family_members","name":"Likely to be influenced by family when making product purchases","score":1},{"consumption_preference_id":"consumption_preferences_spur_of_moment","name":"Likely to indulge in spur of the moment purchases","score":0.5},{"consumption_preference_id":"consumption_preferences_credit_card_payment","name":"Likely to prefer using credit cards for shopping","score":0}]},{"consumption_preference_category_id":"consumption_preferences_health_and_activity","name":"Health & Activity Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_eat_out","name":"Likely to eat out frequently","score":1},{"consumption_preference_id":"consumption_preferences_gym_membership","name":"Likely to have a gym membership","score":1},{"consumption_preference_id":"consumption_preferences_outdoor","name":"Likely to like outdoor activities","score":0}]},{"consumption_preference_category_id":"consumption_preferences_environmental_concern","name":"Environmental Concern Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_concerned_environment","name":"Likely to be concerned about the environment","score":0}]},{"consumption_preference_category_id":"consumption_preferences_entrepreneurship","name":"Entrepreneurship Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_start_business","name":"Likely to consider starting a business in next few years","score":1}]},{"consumption_preference_category_id":"consumption_preferences_movie","name":"Movie Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_movie_romance","name":"Likely to like romance movies","score":1},{"consumption_preference_id":"consumption_preferences_movie_adventure","name":"Likely to like adventure movies","score":0},{"consumption_preference_id":"consumption_preferences_movie_horror","name":"Likely to like horror movies","score":1},{"consumption_preference_id":"consumption_preferences_movie_musical","name":"Likely to like musical movies","score":0},{"consumption_preference_id":"consumption_preferences_movie_historical","name":"Likely to like historical movies","score":0},{"consumption_preference_id":"consumption_preferences_movie_science_fiction","name":"Likely to like science-fiction movies","score":0},{"consumption_preference_id":"consumption_preferences_movie_war","name":"Likely to like war movies","score":0},{"consumption_preference_id":"consumption_preferences_movie_drama","name":"Likely to like drama movies","score":1},{"consumption_preference_id":"consumption_preferences_movie_action","name":"Likely to like action movies","score":0},{"consumption_preference_id":"consumption_preferences_movie_documentary","name":"Likely to like documentary movies","score":0}]},{"consumption_preference_category_id":"consumption_preferences_music","name":"Music Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_music_rap","name":"Likely to like rap music","score":1},{"consumption_preference_id":"consumption_preferences_music_country","name":"Likely to like country music","score":1},{"consumption_preference_id":"consumption_preferences_music_r_b","name":"Likely to like R&B music","score":1},{"consumption_preference_id":"consumption_preferences_music_hip_hop","name":"Likely to like hip hop music","score":1},{"consumption_preference_id":"consumption_preferences_music_live_event","name":"Likely to attend live musical events","score":0},{"consumption_preference_id":"consumption_preferences_music_playing","name":"Likely to have experience playing music","score":0},{"consumption_preference_id":"consumption_preferences_music_latin","name":"Likely to like Latin music","score":1},{"consumption_preference_id":"consumption_preferences_music_rock","name":"Likely to like rock music","score":0},{"consumption_preference_id":"consumption_preferences_music_classical","name":"Likely to like classical music","score":0}]},{"consumption_preference_category_id":"consumption_preferences_reading","name":"Reading Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_read_frequency","name":"Likely to read often","score":0},{"consumption_preference_id":"consumption_preferences_books_entertainment_magazines","name":"Likely to read entertainment magazines","score":1},{"consumption_preference_id":"consumption_preferences_books_non_fiction","name":"Likely to read non-fiction books","score":0},{"consumption_preference_id":"consumption_preferences_books_financial_investing","name":"Likely to read financial investment books","score":1},{"consumption_preference_id":"consumption_preferences_books_autobiographies","name":"Likely to read autobiographical books","score":0}]},{"consumption_preference_category_id":"consumption_preferences_volunteering","name":"Volunteering Preferences","consumption_preferences":[{"consumption_preference_id":"consumption_preferences_volunteer","name":"Likely to volunteer for social causes","score":0}]}],"warnings":[]};

const ConsumptionPreferences = new PersonalityConsumptionPreferences({
    version: 'v3',
    locale: "en"
});
var enSortUnlikely = [
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_music_country',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_clothes_style',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_r_b',
    'consumption_preferences_music_hip_hop',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_movie_action',
    'consumption_preferences_influence_family_members',
    'consumption_preferences_music_live_event',
    'consumption_preferences_movie_war',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_influence_utility',
    'consumption_preferences_music_latin',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_start_business',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_movie_drama',
    'consumption_preferences_outdoor',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_movie_horror',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_movie_romance',
    'consumption_preferences_gym_membership',
    'consumption_preferences_eat_out',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_movie_musical',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_music_playing',
    'consumption_preferences_movie_historical',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_volunteer',
    'consumption_preferences_movie_science_fiction',
    'consumption_preferences_music_classical',
    'consumption_preferences_read_frequency',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_music_rock',
    'consumption_preferences_books_non_fiction'
];

var esSortUnlikely = [
    'consumption_preferences_movie_horror',
    'consumption_preferences_gym_membership',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_music_country',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_movie_romance',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_clothes_style',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_eat_out',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_music_r_b',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_hip_hop',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_war',
    'consumption_preferences_music_live_event',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_influence_utility',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_start_business',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_outdoor',
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_movie_drama',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_movie_musical',
    'consumption_preferences_volunteer',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_movie_science_fiction',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_books_non_fiction',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_music_classical',
    'consumption_preferences_read_frequency',
    'consumption_preferences_movie_historical',
    'consumption_preferences_music_playing',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_music_rock',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_movie_action',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_music_latin'
];

var jaSortUnlikely = [
    'consumption_preferences_influence_family_members',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_influence_utility',
    'consumption_preferences_music_latin',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_movie_drama',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_movie_horror',
    'consumption_preferences_outdoor',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_start_business',
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_movie_romance',
    'consumption_preferences_gym_membership',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_music_country',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_eat_out',
    'consumption_preferences_music_r_b',
    'consumption_preferences_clothes_style',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_hip_hop',
    'consumption_preferences_movie_musical',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_music_playing',
    'consumption_preferences_movie_historical',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_volunteer',
    'consumption_preferences_movie_science_fiction',
    'consumption_preferences_books_non_fiction',
    'consumption_preferences_read_frequency',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_music_classical',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_music_rock',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_movie_action',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_war',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_music_live_event'
];

var koSortUnlikely = [
    'consumption_preferences_outdoor',
    'consumption_preferences_gym_membership',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_music_country',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_eat_out',
    'consumption_preferences_clothes_style',
    'consumption_preferences_music_r_b',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_hip_hop',
    'consumption_preferences_music_latin',
    'consumption_preferences_movie_horror',
    'consumption_preferences_influence_utility',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_movie_drama',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_start_business',
    'consumption_preferences_movie_war',
    'consumption_preferences_movie_romance',
    'consumption_preferences_movie_action',
    'consumption_preferences_influence_family_members',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_music_live_event',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_books_non_fiction',
    'consumption_preferences_music_rock',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_music_classical',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_volunteer',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_read_frequency',
    'consumption_preferences_music_playing',
    'consumption_preferences_movie_historical',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_movie_musical',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_movie_science_fiction'
];

var arSortUnlikely = enSortUnlikely;

var enSortLikely = [
    'consumption_preferences_movie_musical',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_music_playing',
    'consumption_preferences_movie_historical',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_volunteer',
    'consumption_preferences_movie_science_fiction',
    'consumption_preferences_music_classical',
    'consumption_preferences_read_frequency',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_music_rock',
    'consumption_preferences_books_non_fiction',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_movie_action',
    'consumption_preferences_influence_family_members',
    'consumption_preferences_music_live_event',
    'consumption_preferences_movie_war',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_influence_utility',
    'consumption_preferences_music_latin',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_start_business',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_movie_drama',
    'consumption_preferences_outdoor',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_movie_horror',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_movie_romance',
    'consumption_preferences_gym_membership',
    'consumption_preferences_eat_out',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_music_country',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_clothes_style',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_r_b',
    'consumption_preferences_music_hip_hop'
];

var esSortLikely = [
    'consumption_preferences_movie_musical',
    'consumption_preferences_volunteer',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_movie_science_fiction',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_books_non_fiction',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_music_classical',
    'consumption_preferences_read_frequency',
    'consumption_preferences_movie_historical',
    'consumption_preferences_music_playing',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_music_rock',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_movie_action',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_music_latin',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_war',
    'consumption_preferences_music_live_event',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_influence_utility',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_start_business',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_outdoor',
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_movie_drama',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_movie_horror',
    'consumption_preferences_gym_membership',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_music_country',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_movie_romance',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_clothes_style',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_eat_out',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_music_r_b',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_hip_hop'
];

var jaSortLikely = [
    'consumption_preferences_movie_musical',
    'consumption_preferences_automobile_ownership_cost',
    'consumption_preferences_music_playing',
    'consumption_preferences_movie_historical',
    'consumption_preferences_read_motive_enjoyment',
    'consumption_preferences_volunteer',
    'consumption_preferences_movie_science_fiction',
    'consumption_preferences_books_non_fiction',
    'consumption_preferences_read_frequency',
    'consumption_preferences_volunteering_time',
    'consumption_preferences_concerned_environment',
    'consumption_preferences_books_autobiographies',
    'consumption_preferences_volunteer_learning',
    'consumption_preferences_music_classical',
    'consumption_preferences_clothes_comfort',
    'consumption_preferences_music_rock',
    'consumption_preferences_movie_documentary',
    'consumption_preferences_movie_adventure',
    'consumption_preferences_movie_action',
    'consumption_preferences_read_motive_relaxation',
    'consumption_preferences_movie_war',
    'consumption_preferences_clothes_quality',
    'consumption_preferences_music_live_event',
    'consumption_preferences_influence_family_members',
    'consumption_preferences_read_motive_information',
    'consumption_preferences_influence_utility',
    'consumption_preferences_music_latin',
    'consumption_preferences_automobile_safety',
    'consumption_preferences_movie_drama',
    'consumption_preferences_books_entertainment_magazines',
    'consumption_preferences_movie_horror',
    'consumption_preferences_outdoor',
    'consumption_preferences_automobile_resale_value',
    'consumption_preferences_influence_online_ads',
    'consumption_preferences_books_financial_investing',
    'consumption_preferences_start_business',
    'consumption_preferences_credit_card_payment',
    'consumption_preferences_movie_romance',
    'consumption_preferences_gym_membership',
    'consumption_preferences_fast_food_frequency',
    'consumption_preferences_music_country',
    'consumption_preferences_adventurous_sports',
    'consumption_preferences_read_motive_mandatory',
    'consumption_preferences_influence_brand_name',
    'consumption_preferences_spur_of_moment',
    'consumption_preferences_influence_social_media',
    'consumption_preferences_eat_out',
    'consumption_preferences_music_r_b',
    'consumption_preferences_clothes_style',
    'consumption_preferences_music_rap',
    'consumption_preferences_music_hip_hop'
];

var koSortLikely =
    [
        'consumption_preferences_books_entertainment_magazines',
        'consumption_preferences_movie_adventure',
        'consumption_preferences_music_live_event',
        'consumption_preferences_volunteering_time',
        'consumption_preferences_read_motive_relaxation',
        'consumption_preferences_movie_documentary',
        'consumption_preferences_books_non_fiction',
        'consumption_preferences_music_rock',
        'consumption_preferences_concerned_environment',
        'consumption_preferences_music_classical',
        'consumption_preferences_clothes_comfort',
        'consumption_preferences_volunteer',
        'consumption_preferences_books_autobiographies',
        'consumption_preferences_read_frequency',
        'consumption_preferences_music_playing',
        'consumption_preferences_movie_historical',
        'consumption_preferences_volunteer_learning',
        'consumption_preferences_automobile_ownership_cost',
        'consumption_preferences_movie_musical',
        'consumption_preferences_read_motive_enjoyment',
        'consumption_preferences_movie_science_fiction',
        'consumption_preferences_music_latin',
        'consumption_preferences_movie_horror',
        'consumption_preferences_influence_utility',
        'consumption_preferences_clothes_quality',
        'consumption_preferences_movie_drama',
        'consumption_preferences_read_motive_information',
        'consumption_preferences_influence_online_ads',
        'consumption_preferences_credit_card_payment',
        'consumption_preferences_automobile_safety',
        'consumption_preferences_start_business',
        'consumption_preferences_movie_war',
        'consumption_preferences_movie_romance',
        'consumption_preferences_movie_action',
        'consumption_preferences_influence_family_members',
        'consumption_preferences_outdoor',
        'consumption_preferences_gym_membership',
        'consumption_preferences_books_financial_investing',
        'consumption_preferences_music_country',
        'consumption_preferences_spur_of_moment',
        'consumption_preferences_fast_food_frequency',
        'consumption_preferences_automobile_resale_value',
        'consumption_preferences_influence_social_media',
        'consumption_preferences_read_motive_mandatory',
        'consumption_preferences_influence_brand_name',
        'consumption_preferences_adventurous_sports',
        'consumption_preferences_eat_out',
        'consumption_preferences_clothes_style',
        'consumption_preferences_music_r_b',
        'consumption_preferences_music_rap',
        'consumption_preferences_music_hip_hop'
    ];

var arSortLikely = enSortLikely;



function loadConsumptionPreferences(data) {
    var lang = data.processed_language;
    var consumptionPrefMusic = new Set([
        'consumption_preferences_music_rap',
        'consumption_preferences_music_country',
        'consumption_preferences_music_r_b',
        'consumption_preferences_music_hip_hop',
        'consumption_preferences_music_live_event',
        'consumption_preferences_music_playing',
        'consumption_preferences_music_latin',
        'consumption_preferences_music_rock',
        'consumption_preferences_music_classical'
    ]);

    var consumptionPrefMovie = new Set([
        'consumption_preferences_movie_romance',
        'consumption_preferences_movie_adventure',
        'consumption_preferences_movie_horror',
        'consumption_preferences_movie_musical',
        'consumption_preferences_movie_historical',
        'consumption_preferences_movie_science_fiction',
        'consumption_preferences_movie_war',
        'consumption_preferences_movie_drama',
        'consumption_preferences_movie_action',
        'consumption_preferences_movie_documentary'
    ]);

    function addIfAllowedReducer(accumulator, toadd) {
        if (consumptionPrefMusic.has(toadd.cpid)) {
            if (accumulator.reduce(function(k, v) {
                    return consumptionPrefMusic.has(v.cpid)
                        ? k + 1
                        : k;
                }, 0) < 1) {
                accumulator.push(toadd);
            }
        } else if (consumptionPrefMovie.has(toadd.cpid)) {

            if (accumulator.reduce(function(k, v) {
                    return consumptionPrefMovie.has(v.cpid)
                        ? k + 1
                        : k;
                }, 0) < 1) {
                accumulator.push(toadd);
            }
        } else {
            accumulator.push(toadd);
        }
        return accumulator;
    }

    function sortIdxComparator(x, y) {

        var a = x.idx;
        var b = y.idx;

        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        if (a === b) {
            return 0;
        }
    }


    function cpIdSortingLikely(cpid, lang) {
        var sortArray;
        if(lang == 'en') sortArray = enSortLikely;
        if(lang == 'es') sortArray = esSortLikely;
        if(lang == 'ja') sortArray = jaSortLikely;
        if(lang == 'ar') sortArray = arSortLikely;
        if(lang == 'ko') sortArray = koSortLikely;
        return sortArray.indexOf(cpid);
    }

    function cpIdSortingUnlikely(cpid, lang) {
        var sortArray;
        if(lang == 'en') sortArray = enSortUnlikely;
        if(lang == 'es') sortArray = esSortUnlikely;
        if(lang == 'ja') sortArray = jaSortUnlikely;
        if(lang == 'ar') sortArray = arSortUnlikely;
        if(lang == 'ko') sortArray = koSortUnlikely;
        return sortArray.indexOf(cpid);
    }


    /**
     * cpIdMapping returns the description for a consumption_preference_id
     * Uses the personality-consumption-preferences npm module
     */
    function cpIdMapping(consumption_preference_id) {
        return ConsumptionPreferences.description(consumption_preference_id);
    }

    console.log(data);
    if (data.consumption_preferences) {
        var likelycps = data.consumption_preferences.reduce(function(k, v) {
            v.consumption_preferences.map(function(child_item) {
                if (child_item.score === 1) {
                    k.push({
                        name: cpIdMapping(child_item.consumption_preference_id),
                        idx: cpIdSortingLikely(child_item.consumption_preference_id,lang),
                        cpid: child_item.consumption_preference_id
                    });
                }
            });
            return k;
        }, []);

        var unlikelycps = data.consumption_preferences.reduce(function(k, v) {
            v.consumption_preferences.map(function(child_item) {
                if (child_item.score === 0) {
                    k.push({
                        name: cpIdMapping(child_item.consumption_preference_id),
                        idx: cpIdSortingUnlikely(child_item.consumption_preference_id,lang),
                        cpid: child_item.consumption_preference_id
                    });
                }
            });
            return k;
        },[]);


        var index = 0;
        likelycps.sort(sortIdxComparator).reduce(addIfAllowedReducer, []).slice(0, 3).map(function(item) {
            $('.likely' + index).text(''+item.name);
            index++;
        });
        index = 0;

        unlikelycps.sort(sortIdxComparator).reduce(addIfAllowedReducer, []).slice(0, 3).map(function(item) {
            $('.unlikely' + index).text(''+item.name);
            index++;
        });

    } else {
        $('.output-summary--right').hide();
        $('.output-summary--left').css('width', 'auto');
    }
}
