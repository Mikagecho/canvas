import { ScenarioNode } from './types';

// ゲーム開始位置
export const openingLocation = 'node_001';

// シナリオデータ完全版
export const scenarioData: Record<string, ScenarioNode> = {
    // ---------------------------------------------------------
    // 序章：嵐と館への到着（既存パート）
    // ---------------------------------------------------------
    'node_001': {
        id: 'node_001',
        text: '激しい雨が、フロントガラスを叩きつけている。\nワイパーは必死に動いているが、視界はほとんど効かない。',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        seId: 'se_heavy_rain',
        next: 'node_002',
    },
    'node_002': {
        id: 'node_002',
        text: '「ねえ、本当にこっちで合ってるの？」\n助手席の彼女が、不安そうに声を上げた。',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        characterId: 'partner',
        next: 'node_003',
    },
    'node_003': {
        id: 'node_003',
        text: '「ナビ通りだよ。……ただ、この山道は予想外だったな」\n僕は強がって見せたが、内心では焦りを感じていた。',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        characterId: 'protagonist',
        next: 'node_004',
    },
    'node_004': {
        id: 'node_004',
        text: '不意に、車体が大きくガクンと揺れた。\n鈍い金属音が響き、ハンドルが取られる。',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        seId: 'se_car_breakdown',
        effect: 'shake',
        next: 'node_005',
    },
    'node_005': {
        id: 'node_005',
        text: '「きゃあっ！」',
        characterId: 'partner',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        next: 'node_006',
    },
    'node_006': {
        id: 'node_006',
        text: '車は制御を失い、泥濘に突っ込んで停止した。\n……エンジンをかけ直そうとするが、虚しい音が響くだけだ。',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        seId: 'se_engine_fail',
        next: 'node_007',
    },
    'node_007': {
        id: 'node_007',
        text: '「嘘……エンスト？」\n「ああ、まいったな。携帯も圏外だ」',
        backgroundId: '/images/bg/bg_car_interior_rain1.webp',
        next: 'node_008',
    },
    'node_008': {
        id: 'node_008',
        text: 'ふと、雷光が走り、一瞬だけ闇を切り裂いた。\nその先――木々の隙間に、古びた洋館のシルエットが浮かび上がった。',
        backgroundId: '/images/bg/bg_forest_mansion_distant.webp',
        seId: 'se_thunder',
        effect: 'flash',
        next: 'node_009',
    },
    'node_009': {
        id: 'node_009',
        text: '「あそこに……灯りが見える」\n他に選択肢はなかった。\n僕たちは車を捨て、その館へ向かうことにした。',
        backgroundId: '/images/bg/bg_forest_mansion_distant.webp',
        next: 'node_010',
    },
    'node_010': {
        id: 'node_010',
        text: '泥に足を取られながら歩くこと数十分。\n目の前に、蔦に覆われた巨大な門がそびえ立っている。',
        backgroundId: '/images/bg/bg_mansion_gate.webp',
        seId: 'se_footsteps_mud',
        next: 'node_011',
    },
    'node_011': {
        id: 'node_011',
        text: '表札には古めかしい文字でこう刻まれていた。\n『彼岸花（ヒガンバナ）屋敷』……と。',
        backgroundId: '/images/bg/bg_mansion_gate.webp',
        next: 'node_choices_01',
    },
    'node_choices_01': {
        id: 'node_choices_01',
        text: 'どうする？',
        backgroundId: '/images/bg/bg_mansion_gate.webp',
        choices: [
            {
                id: 'c1',
                text: '門を叩いてみる',
                nextNodeId: 'node_enter_gate',
            },
            {
                id: 'c2',
                text: '大声で助けを呼ぶ',
                nextNodeId: 'node_shout',
            },
            {
                id: 'c3',
                text: '見なかったことにする',
                nextNodeId: 'node_gag_pre_reveal',
            }
        ]
    },
    'node_shout': {
        id: 'node_shout',
        text: '「すいませーん！ 誰かいませんか！」\n僕の声が闇に吸い込まれていく。\n返事はない。ただ、雨音だけが強くなった気がした。',
        backgroundId: '/images/bg/bg_mansion_gate.webp',
        next: 'node_enter_gate'
    },
    'node_enter_gate': {
        id: 'node_enter_gate',
        text: '重厚な音を立てて、門がゆっくりと開いた。\nまるで僕達を招き入れているかのように……。',
        backgroundId: '/images/bg/bg_mansion_gate_open.webp',
        seId: 'se_gate_open',
        next: 'node_mansion_entrance'
    },
    'node_mansion_entrance': {
        id: 'node_mansion_entrance',
        text: '玄関ホールは静まり返っていた。\n古びた洋館特有の、黴臭い匂いが鼻をつく。\n「誰も……いないみたいだね」',
        backgroundId: '/images/bg/bg_mansion_hall.webp',
        next: 'node_find_doll',
    },
    'node_find_doll': {
        id: 'node_find_doll',
        text: '靴箱の上、ホコリにまみれて何かが置いてある。\n……日本人形だ。\n不気味なほど精巧な作りで、じっとこちらを見つめている気がする。',
        backgroundId: '/images/bg/bg_mansion_hall.webp',
        next: 'node_choices_doll',
    },
    'node_choices_doll': {
        id: 'node_choices_doll',
        text: 'どうする？',
        backgroundId: '/images/bg/bg_mansion_hall.webp',
        choices: [
            {
                id: 'c_doll_1',
                text: '人形を拾う',
                nextNodeId: 'node_doll_pickup',
                onSelect: (state) => ({
                    flags: { ...state.flags, doll_picked_up: true }
                })
            },
            {
                id: 'c_doll_2',
                text: '無視して奥へ進む',
                nextNodeId: 'node_doll_ignore',
            }
        ]
    },
    'node_doll_pickup': {
        id: 'node_doll_pickup',
        text: '僕は人形を手に取った。\nひやりと冷たい。\nなぜか、手放してはいけないような気がしたのだ。',
        backgroundId: '/images/bg/bg_mansion_hall.webp',
        next: 'node_explore_start'
    },
    'node_doll_ignore': {
        id: 'node_doll_ignore',
        text: '「気味が悪いな……放っておこう」\n僕は視線を逸らし、奥へと進むことにした。',
        backgroundId: '/images/bg/bg_mansion_hall.webp',
        next: 'node_explore_start'
    },
    // ---------------------------------------------------------
    // 第一章：探索と違和感（新規追加パート）
    // ---------------------------------------------------------
    'node_explore_start': {
        id: 'node_explore_start',
        text: '廊下は長く、薄暗い。\n壁に飾られた絵画たちは、どれも「赤い花」を描いているようだ。',
        backgroundId: '/images/bg/bg_corridor.webp',
        next: 'node_explore_choice_01'
    },
    'node_explore_choice_01': {
        id: 'node_explore_choice_01',
        text: '左右に扉がある。どちらへ進む？',
        backgroundId: '/images/bg/bg_corridor.webp',
        choices: [
            { id: 'c_room_dining', text: '右の扉（食堂）', nextNodeId: 'node_dining_room' },
            { id: 'c_room_library', text: '左の扉（書斎）', nextNodeId: 'node_library' }
        ]
    },

    // --- ルートA：食堂 ---
    'node_dining_room': {
        id: 'node_dining_room',
        text: 'そこは広い食堂だった。\n長いテーブルの上には、豪勢な料理が並べられている……\nいや、違う。',
        backgroundId: '/images/bg/bg_dining.webp',
        next: 'node_dining_rot'
    },
    'node_dining_rot': {
        id: 'node_dining_rot',
        text: 'よく見ると、それらは全て腐り落ちていた。\n皿からはみ出した植物の根が、肉や魚を苗床にして脈打っている。',
        backgroundId: '/images/bg/bg_dining_rot.webp',
        effect: 'glitch',
        next: 'node_dining_partner'
    },
    'node_dining_partner': {
        id: 'node_dining_partner',
        text: '「……綺麗」\n隣で、彼女がポツリと呟いた。\n僕が振り返ると、彼女は腐敗した料理をうっとりと見つめていた。',
        backgroundId: '/images/bg/bg_dining_rot.webp',
        characterId: 'partner',
        next: 'node_merge_explore'
    },

    // --- ルートB：書斎 ---
    'node_library': {
        id: 'node_library',
        text: '黴と紙の匂いが充満する書斎だ。\n机の上に、開きっぱなしの日記が置かれている。',
        backgroundId: '/images/bg/bg_library.webp',
        next: 'node_library_read'
    },
    'node_library_read': {
        id: 'node_library_read',
        text: '『9月15日。彼岸花の移植に成功。\nこの花は水を必要としない。必要なのは、新鮮な血液と……恐怖の感情だ』',
        backgroundId: '/images/bg/bg_library_book.webp',
        seId: 'se_page_flip',
        next: 'node_library_partner'
    },
    'node_library_partner': {
        id: 'node_library_partner',
        text: '「ねえ、早く行きましょうよ」\n彼女が僕の腕を強く引いた。\nその力は、普段の彼女からは想像できないほど強かった。',
        backgroundId: '/images/bg/bg_library.webp',
        characterId: 'partner',
        next: 'node_merge_explore'
    },

    // --- 共通ルート：異変 ---
    'node_merge_explore': {
        id: 'node_merge_explore',
        text: '廊下に戻ると、館の空気そのものが変わっていた。\n床板の隙間から、赤い蔦が這い出してきている。\n「……ねえ、私、ちょっと手洗いに行きたいんだけど」',
        backgroundId: '/images/bg/bg_corridor_vines.webp',
        next: 'node_separation'
    },
    'node_separation': {
        id: 'node_separation',
        text: '「すぐそこだと思うから。待ってて」\n止める間もなく、彼女は廊下の角を曲がって消えてしまった。\n一人残された僕は、嫌な予感に震えた。',
        backgroundId: '/images/bg/bg_corridor_vines.webp',
        next: 'node_wait_or_search'
    },
    'node_wait_or_search': {
        id: 'node_wait_or_search',
        text: '彼女が戻ってこない。\n10分は経っただろうか。',
        backgroundId: '/images/bg/bg_corridor_vines.webp',
        choices: [
            { id: 'c_wait', text: 'もう少し待つ', nextNodeId: 'node_too_late' },
            { id: 'c_search', text: '探しに行く', nextNodeId: 'node_search_scream' }
        ]
    },
    'node_too_late': {
        id: 'node_too_late',
        text: '……ズズズ……\n足元で何かが蠢く感覚。\n見下ろすと、床板を突き破った大量の蔦が、僕の足に絡みついていた。',
        backgroundId: '/images/bg/bg_corridor_vines.webp',
        seId: 'se_vine_creep',
        next: 'node_bad_end_1'
    },

    // ---------------------------------------------------------
    // 第二章：急転（地下室へ）
    // ---------------------------------------------------------
    'node_search_scream': {
        id: 'node_search_scream',
        text: '『きゃあああああ！！』\n館の奥から、彼女の悲鳴が響いた。\n僕は弾かれたように走り出した。',
        backgroundId: '/images/bg/bg_corridor_run.webp',
        seId: 'se_scream',
        effect: 'shake',
        next: 'node_basement_door'
    },
    'node_basement_door': {
        id: 'node_basement_door',
        text: '悲鳴の元は、階段の下……地下室のようだ。\n鉄の扉が少し開いている。\n中から、むせ返るような花の香りが漂ってくる。',
        backgroundId: '/images/bg/bg_basement_door.webp',
        next: 'node_enter_basement'
    },
    'node_enter_basement': {
        id: 'node_enter_basement',
        text: '地下室に入った瞬間、僕は絶句した。\nそこはコンクリートの部屋ではなく、一面の「彼岸花」が咲き乱れる庭園だった。',
        backgroundId: '/images/bg/bg_basement_flowers.webp',
        seId: 'se_ambient_horror',
        next: 'node_meet_partner'
    },
    'node_meet_partner': {
        id: 'node_meet_partner',
        text: 'その中央に、彼女は立っていた。\n無傷だ。\nだが、何かが決定的に違う。',
        backgroundId: '/images/bg/bg_basement_flowers.webp',
        characterId: 'partner', // ここでシルエットの色を赤に変えると効果的
        next: 'node_partner_truth'
    },
    'node_partner_truth': {
        id: 'node_partner_truth',
        text: '「来てくれたのね。……私の苗床（あなた）」\n彼女が振り返る。\nその顔には目も鼻もなく、巨大な彼岸花が咲いていた。',
        backgroundId: '/images/bg/bg_basement_flowers_horror.webp',
        effect: 'flash',
        seId: 'se_shock',
        next: 'node_final_choice'
    },

    // ---------------------------------------------------------
    // 最終章：決断と結末
    // ---------------------------------------------------------
    'node_final_choice': {
        id: 'node_final_choice',
        text: '蔦が四方から襲いかかってくる！\nどうする！？',
        backgroundId: '/images/bg/bg_basement_flowers_horror.webp',
        choices: [
            { id: 'c_end_giveup', text: '抵抗をやめる', nextNodeId: 'node_bad_end_1' },
            { id: 'c_end_run', text: '突き飛ばして逃げる', nextNodeId: 'node_normal_end_run' },
            // 特定の条件（人形を持っている）でのみ出現する選択肢
            {
                id: 'c_end_item',
                text: '【人形】を投げつける',
                nextNodeId: 'node_true_end_check',
                // 条件付き表示のロジックはGameScreen側で実装が必要だが、
                // ここでは簡易的に遷移先でチェックする形式にする
            }
        ]
    },

    // === BAD END: 肥料 ===
    'node_bad_end_1': {
        id: 'node_bad_end_1',
        text: '抵抗する気力が湧かない。\n蔦は優しく僕を包み込み、鋭い棘を首筋に突き立てた。\n意識が遠のく中、僕は彼女と一つになれた喜びを感じていた……。',
        backgroundId: '/images/bg/bg_red_out.webp',
        next: 'node_game_over_bad'
    },
    'node_game_over_bad': {
        id: 'node_game_over_bad',
        text: '【BAD END 1：肥料】',
        // backgroundId: '/images/bg/bg_black.webp', // Assuming standard black ending or keep red? Keeping consistency with prev
        backgroundId: '/images/bg/bg_black.webp',
    },

    // === NORMAL END: 脱出 ===
    'node_normal_end_run': {
        id: 'node_normal_end_run',
        text: '「うわああああっ！」\n僕は彼女を突き飛ばし、無我夢中で階段を駆け上がった。\n背後で「逃がさない」という叫び声が聞こえた気がした。',
        backgroundId: '/images/bg/bg_corridor_run.webp', // Reusing run image
        next: 'node_escape_outside'
    },
    'node_escape_outside': {
        id: 'node_escape_outside',
        text: '雨の中、泥だらけになりながら山道を転がり落ちる。\n気がつくと、夜が明け始めていた。\n館はもう、どこにも見当たらなかった。',
        backgroundId: '/images/bg/bg_morning_forest.webp',
        next: 'node_normal_end_epilogue'
    },
    'node_normal_end_epilogue': {
        id: 'node_normal_end_epilogue',
        text: '僕は助かったのだ。\n……でも、時々ふと思う。\n僕が置いてきた彼女は、今もあの地下室で、次の訪問者を待っているのだろうか？',
        backgroundId: '/images/bg/bg_morning_forest.webp',
        next: 'node_game_over_normal'
    },
    'node_game_over_normal': {
        id: 'node_game_over_normal',
        text: '【NORMAL END：生還者の孤独】',
        backgroundId: '/images/bg/bg_white.webp', // Or black, let's go with white for normal/morning end? Request had black/white.
    },

    // === TRUE END: 浄化 ===
    'node_true_end_check': {
        id: 'node_true_end_check',
        text: '……',
        backgroundId: '/images/bg/bg_basement_flowers_horror.webp',
        // フラグチェック用の特殊ノード
        // GameScreen側で flags.doll_picked_up を見て分岐させるのが理想だが、
        // ここでは便宜上、必ずアイテムがある前提のシナリオフローにつなぐ
        // (フラグがない場合はUI側で選択肢を出さない制御推奨)
        next: 'node_true_end_burn'
    },
    'node_true_end_burn': {
        id: 'node_true_end_burn',
        text: '僕は懐にあった日本人形を、彼女――いや、彼岸花の怪物に向かって投げつけた！\n「ギャアアアアッ！？」\n人形が触れた瞬間、青白い炎が燃え上がり、花々を焼き尽くしていく。',
        backgroundId: '/images/bg/bg_fire.webp',
        seId: 'se_burn',
        next: 'node_true_end_speech'
    },
    'node_true_end_speech': {
        id: 'node_true_end_speech',
        text: '炎の中で、彼女の顔が一瞬だけ元に戻った。\n「……ありがとう」\nそう聞こえた直後、館全体が崩れ落ちていく。',
        backgroundId: '/images/bg/bg_fire.webp',
        next: 'node_true_end_final'
    },
    'node_true_end_final': {
        id: 'node_true_end_final',
        text: '燃え盛る屋敷を背に、僕は歩き出した。\n雨は上がり、雲間から朝日が差し込んでいる。\nポケットの中には、身代わりになった人形の欠片だけが残っていた。',
        backgroundId: '/images/bg/bg_morning_sun.webp',
        next: 'node_game_over_true'
    },
    'node_game_over_true': {
        id: 'node_game_over_true',
        text: '【TRUE END：彼岸の夜明け】',
        backgroundId: '/images/bg/bg_white.webp',
    },

    // ---------------------------------------------------------
    // ギャグ・ドッキリコメディルート
    // ---------------------------------------------------------
    'node_gag_pre_reveal': {
        id: 'node_gag_pre_reveal',
        text: '「……帰ろう」\n直感的にヤバイ気配を感じた僕は、回れ右をした。\nだが、彼女がガシッと腕を掴んでくる。\n「ダメよ。せっかく来たんだから」',
        backgroundId: '/images/bg/node_gag_pre_reveal.webp',
        next: 'node_gag_hall_dark'
    },
    'node_gag_hall_dark': {
        id: 'node_gag_hall_dark',
        text: '「え、ちょっと！？」\n強引に引きずられ、門の中へ。\n玄関ホールは真っ暗だ。\n……いや、気配がする。闇の奥に、無数の"何か"がいる……！',
        backgroundId: '/images/bg/node_gag_hall_dark.webp',
        seId: 'se_ambient_horror',
        next: 'node_gag_jump_scare'
    },
    'node_gag_jump_scare': {
        id: 'node_gag_jump_scare',
        text: 'ヒュッ……！\n目の前に、恐ろしい形相の怪物が飛び出してきた！\n「うわあああああ！！」',
        backgroundId: '/images/bg/node_gag_jump_scare.webp',
        effect: 'shake',
        seId: 'se_shock',
        next: 'node_gag_reveal'
    },
    'node_gag_reveal': {
        id: 'node_gag_reveal',
        text: '……と思いきや、怪物はピタリと止まり、パンッ！とクラッカーを鳴らした。\n『『『ハッピーバースデー！！！』』』\n一斉に明かりがつく。',
        backgroundId: '/images/bg/node_gag_reveal.webp',
        effect: 'flash',
        next: 'node_gag_flashmob'
    },
    'node_gag_flashmob': {
        id: 'node_gag_flashmob',
        text: 'そこには笑顔の友人たち（と、特殊メイクのバイトの人々）が待ち構えていた。\n「ドッキリ大成功～！」「ビビりすぎだろお前ｗ」\nそして始まる、息の合ったフラッシュモブダンス。\n軽快なリズムまたたく間に館を満たしていく。',
        backgroundId: '/images/bg/node_gag_flashmob.webp',
        next: 'node_gag_end'
    },
    'node_gag_end': {
        id: 'node_gag_end',
        text: '【GAG END：サプライズ・パーティー】\n僕は腰を抜かしながらも、安堵と困惑の中で誕生日を祝われるのだった……。',
        backgroundId: '/images/bg/bg_white.webp',
    }
};