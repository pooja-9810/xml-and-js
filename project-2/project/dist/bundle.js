(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const movies = require("../data/movies");
    
    const getAll = ({ id, movie_title, movie_genre, release_year,budget, language,rating } = {}) =>
      new Promise((resolve) => {
        let result = Array.from(movies);
        
        resolve({ code: 200, data: result });
      });
    
    const getById = (id) =>
      new Promise((resolve) => {
        const movie = movies.find((movie) => movie.id === id);
    
        if (movies) {
          resolve({ code: 200, data: movies });
        } else {
          resolve({
            code: 404,
            data: { message: `No movie found for id ${id}` },
          });
        }
      });
    
    module.exports = {
      getAll,
      getById,
    };
    
    },{"../data/movies":2}],2:[function(require,module,exports){
    module.exports=[{"id":1,"movie_title":"Safe","movie_genre":"Thriller","release_year":2005,"budget":"$282.31M","language":"Dutch","rating":3},
    {"id":2,"movie_title":"Loveless, The (Breakdown)","movie_genre":"Drama","release_year":2004,"budget":"$3.55B","language":"Lao","rating":5},
    {"id":3,"movie_title":"Butcher Boys (Bone Boys)","movie_genre":"Action","release_year":1994,"budget":"$805.82M","language":"Bislama","rating":8},
    {"id":4,"movie_title":"I Accuse","movie_genre":"Crime","release_year":2000,"budget":"$14.08B","language":"Malagasy","rating":3},
    {"id":5,"movie_title":"Warsaw Bridge (Pont de Varsòvia)","movie_genre":"Drama","release_year":2007,"budget":"$213.58M","language":"Kyrgyz","rating":7},
    {"id":6,"movie_title":"Life and Death of Peter Sellers","movie_genre":"Comedy","release_year":1995,"budget":"$6.95B","language":"Japanese","rating":6},
    {"id":7,"movie_title":"Eyes of Laura Mars","movie_genre":"Mystery","release_year":2006,"budget":"$64.14M","language":"Moldovan","rating":6},
    {"id":8,"movie_title":"Malone","movie_genre":"Action","release_year":2011,"budget":"$87.9M","language":"Hiri Motu","rating":8},
    {"id":9,"movie_title":"Wicked Lady, The","movie_genre":"Adventure","release_year":1998,"budget":"$230.28M","language":"Papiamento","rating":1},
    {"id":10,"movie_title":"Equinox Flower (Higanbana)","movie_genre":"Comedy","release_year":2006,"budget":"$440.37M","language":"Romanian","rating":8},
    {"id":11,"movie_title":"Nymphomaniac: Volume II","movie_genre":"Drama","release_year":2010,"budget":"$244.93M","language":"Indonesian","rating":2},
    {"id":12,"movie_title":"Where in the World Is Osama Bin Laden?","movie_genre":"Documentary","release_year":1997,"budget":"n/a","language":"Burmese","rating":8},
    {"id":13,"movie_title":"Between the Folds","movie_genre":"Documentary","release_year":1965,"budget":"$68.03M","language":"Kazakh","rating":5},
    {"id":14,"movie_title":"Another Cinderella Story","movie_genre":"Children","release_year":2002,"budget":"n/a","language":"Gujarati","rating":8},
    {"id":15,"movie_title":"Buttcrack","movie_genre":"Comedy","release_year":2002,"budget":"$3.52B","language":"Hungarian","rating":7},
    {"id":16,"movie_title":"New Jack City","movie_genre":"Action","release_year":2009,"budget":"$1.04B","language":"Swahili","rating":9},
    {"id":17,"movie_title":"Clara's Heart","movie_genre":"Drama","release_year":2001,"budget":"$34.81B","language":"Malagasy","rating":3},
    {"id":18,"movie_title":"Strike (Stachka)","movie_genre":"Drama","release_year":2006,"budget":"n/a","language":"Sotho","rating":6},
    {"id":19,"movie_title":"No Mercy","movie_genre":"Action","release_year":1990,"budget":"$10.9M","language":"Italian","rating":5},
    {"id":20,"movie_title":"Vodka, Mr. Palmu (Vodkaa, komisario Palmu)","movie_genre":"Crime","release_year":1992,"budget":"$1.32B","language":"Dzongkha","rating":6},
    {"id":21,"movie_title":"Feeling Minnesota","movie_genre":"Drama","release_year":2000,"budget":"$24.37B","language":"Pashto","rating":9},
    {"id":22,"movie_title":"Jim Jefferies: Fully Functional (EPIX)","movie_genre":"Comedy","release_year":2002,"budget":"n/a","language":"Dutch","rating":8},
    {"id":23,"movie_title":"På sista versen","movie_genre":"Comedy","release_year":1992,"budget":"n/a","language":"Dzongkha","rating":5},
    {"id":24,"movie_title":"Razorback","movie_genre":"Horror","release_year":1990,"budget":"$2.21B","language":"Bislama","rating":7},
    {"id":25,"movie_title":"How I Live Now","movie_genre":"Action","release_year":2008,"budget":"$10.19B","language":"Swedish","rating":7},
    {"id":26,"movie_title":"My Friend Flicka","movie_genre":"Children","release_year":1997,"budget":"$6.36M","language":"Haitian Creole","rating":6},
    {"id":27,"movie_title":"Stranger by the Lake (L'inconnu du lac)","movie_genre":"Drama","release_year":2006,"budget":"$1.35B","language":"Punjabi","rating":4},
    {"id":28,"movie_title":"Nothing About Robert (Rien sur Robert)","movie_genre":"Comedy","release_year":1997,"budget":"$41.81B","language":"Tok Pisin","rating":8},
    {"id":29,"movie_title":"Exterminating Angel, The (Ángel exterminador, El)","movie_genre":"Comedy","release_year":1992,"budget":"$119.14M","language":"Dutch","rating":1},
    {"id":30,"movie_title":"Black Sunday (La maschera del demonio)","movie_genre":"Horror","release_year":1989,"budget":"$490.61M","language":"Hindi","rating":7},
    {"id":31,"movie_title":"Legend of Drunken Master, The (Jui kuen II)","movie_genre":"Action","release_year":2003,"budget":"$118.79M","language":"Persian","rating":7},
    {"id":32,"movie_title":"That Certain Woman","movie_genre":"Drama","release_year":2008,"budget":"$844.04M","language":"Northern Sotho","rating":8},
    {"id":33,"movie_title":"Curse of the Ring (Ring of the Nibelungs)","movie_genre":"Fantasy","release_year":1992,"budget":"n/a","language":"Thai","rating":2},
    {"id":34,"movie_title":"Design for Scandal","movie_genre":"Comedy","release_year":2010,"budget":"$155.4M","language":"Gagauz","rating":8},
    {"id":35,"movie_title":"Dim Sum: A Little Bit of Heart","movie_genre":"Comedy","release_year":2011,"budget":"$12.62B","language":"Tsonga","rating":9},
    {"id":36,"movie_title":"Alyce Kills","movie_genre":"Horror","release_year":1993,"budget":"$1.5B","language":"English","rating":4},
    {"id":37,"movie_title":"Million Dollar Baby","movie_genre":"Drama","release_year":1996,"budget":"$126.34M","language":"Ndebele","rating":6},
    {"id":38,"movie_title":"Frantic","movie_genre":"Crime","release_year":1992,"budget":"$740.26M","language":"Mongolian","rating":4},
    {"id":39,"movie_title":"Moving","movie_genre":"Comedy","release_year":2005,"budget":"$17.99B","language":"Bengali","rating":9},
    {"id":40,"movie_title":"Rocaterrania","movie_genre":"Documentary","release_year":2001,"budget":"$1.17B","language":"Telugu","rating":2},
    {"id":41,"movie_title":"Guy X","movie_genre":"Comedy","release_year":1998,"budget":"$552.62M","language":"Finnish","rating":8},
    {"id":42,"movie_title":"Adventures of Felix, The (a.k.a. Funny Felix) (Drôle de Félix)","movie_genre":"Comedy","release_year":1996,"budget":"$498.3M","language":"Portuguese","rating":9},
    {"id":43,"movie_title":"Ace of Aces (a.k.a. Super Ace, The) (As des as, L')","movie_genre":"Adventure","release_year":1997,"budget":"$544.37M","language":"Afrikaans","rating":2},
    {"id":44,"movie_title":"Dogs of War, The","movie_genre":"Drama","release_year":2001,"budget":"$6.47B","language":"Bosnian","rating":9},
    {"id":45,"movie_title":"Teorema","movie_genre":"Drama","release_year":1984,"budget":"$54.18B","language":"Croatian","rating":9},
    {"id":46,"movie_title":"Time to Leave","movie_genre":"Drama","release_year":2006,"budget":"$374.4M","language":"Korean","rating":2},
    {"id":47,"movie_title":"Monkey's Mask, The","movie_genre":"Crime","release_year":2012,"budget":"$4.8B","language":"Yiddish","rating":9},
    {"id":48,"movie_title":"Hush... Hush, Sweet Charlotte","movie_genre":"Horror","release_year":1992,"budget":"$9.38B","language":"Burmese","rating":8},
    {"id":49,"movie_title":"Love Field","movie_genre":"Drama","release_year":2009,"budget":"$42.15M","language":"Somali","rating":7},
    {"id":50,"movie_title":"Dirty Sanchez: The Movie","movie_genre":"Comedy","release_year":1994,"budget":"$2.64B","language":"French","rating":9},
    {"id":51,"movie_title":"Do You Remember Dolly Bell? (Sjecas li se, Dolly Bell)","movie_genre":"Comedy","release_year":2000,"budget":"$1.6B","language":"Lithuanian","rating":9},
    {"id":52,"movie_title":"Hamlet, Prince of Denmark","movie_genre":"Drama","release_year":2004,"budget":"$9.15M","language":"Romanian","rating":1},
    {"id":53,"movie_title":"Focus","movie_genre":"Comedy","release_year":1997,"budget":"$6.11M","language":"Aymara","rating":7},
    {"id":54,"movie_title":"Resident Evil: Extinction","movie_genre":"Action","release_year":2011,"budget":"$231.47M","language":"Bengali","rating":3},
    {"id":55,"movie_title":"Naked Jungle, The","movie_genre":"Adventure","release_year":2001,"budget":"$52.1M","language":"Assamese","rating":4},
    {"id":56,"movie_title":"Frankenstein Conquers the World","movie_genre":"Action","release_year":2006,"budget":"$8.4B","language":"Moldovan","rating":3},
    {"id":57,"movie_title":"Madison","movie_genre":"Drama","release_year":2007,"budget":"$4.68B","language":"Tajik","rating":1},
    {"id":58,"movie_title":"Synthetic Pleasures","movie_genre":"Documentary","release_year":2002,"budget":"$37.14B","language":"English","rating":9},
    {"id":59,"movie_title":"Mountain Men, The","movie_genre":"Adventure","release_year":1999,"budget":"$2.52B","language":"Arabic","rating":7},
    {"id":60,"movie_title":"Adventures of Power","movie_genre":"Comedy","release_year":2006,"budget":"$29.72M","language":"Georgian","rating":3},
    {"id":61,"movie_title":"Perfectly Normal","movie_genre":"Comedy","release_year":2009,"budget":"$1.28B","language":"Assamese","rating":1},
    {"id":62,"movie_title":"Striking Range","movie_genre":"Action","release_year":1991,"budget":"$791.4M","language":"Pashto","rating":9},
    {"id":63,"movie_title":"Great King, The (Der große König)","movie_genre":"Drama","release_year":1992,"budget":"$304.71M","language":"Portuguese","rating":9},
    {"id":64,"movie_title":"You've Been Trumped","movie_genre":"Documentary","release_year":1994,"budget":"n/a","language":"Afrikaans","rating":8},
    {"id":65,"movie_title":"Sword of the Beast (Kedamono no ken)","movie_genre":"Action","release_year":2007,"budget":"$13.02M","language":"Hungarian","rating":9},
    {"id":66,"movie_title":"Play House, The","movie_genre":"Comedy","release_year":1987,"budget":"$9.3B","language":"Dzongkha","rating":3},
    {"id":67,"movie_title":"Hustle","movie_genre":"Crime","release_year":1989,"budget":"$607.83M","language":"Azeri","rating":2},
    {"id":68,"movie_title":"Latitude Zero (Ido zero daisakusen)","movie_genre":"Action","release_year":2008,"budget":"$4.15B","language":"Dutch","rating":9},
    {"id":69,"movie_title":"Ghost Dad","movie_genre":"Comedy","release_year":2002,"budget":"$3.27B","language":"New Zealand Sign Language","rating":5},
    {"id":70,"movie_title":"Confidentially Connie","movie_genre":"Children","release_year":1999,"budget":"$1.53B","language":"Dhivehi","rating":1},
    {"id":71,"movie_title":"Last Holiday","movie_genre":"Comedy","release_year":1999,"budget":"$9.97B","language":"Luxembourgish","rating":9},
    {"id":72,"movie_title":"Tycoon","movie_genre":"Adventure","release_year":2006,"budget":"$3.33B","language":"Tamil","rating":6},
    {"id":73,"movie_title":"Chinese Puzzle (Casse-tête chinois)","movie_genre":"Comedy","release_year":2010,"budget":"$321.59M","language":"Indonesian","rating":2},
    {"id":74,"movie_title":"Brother of Sleep (Schlafes Bruder)","movie_genre":"Drama","release_year":2010,"budget":"$18.42B","language":"Tswana","rating":3},
    {"id":75,"movie_title":"Furies, The","movie_genre":"Drama","release_year":1998,"budget":"n/a","language":"Tswana","rating":9},
    {"id":76,"movie_title":"Letter from Siberia","movie_genre":"Drama","release_year":2006,"budget":"$438.67M","language":"Hiri Motu","rating":3},
    {"id":77,"movie_title":"Hungry Hill","movie_genre":"Drama","release_year":2011,"budget":"$3.68B","language":"Dari","rating":2},
    {"id":78,"movie_title":"Titanic","movie_genre":"Action","release_year":2002,"budget":"$14.72B","language":"Dari","rating":2},
    {"id":79,"movie_title":"Hole, The","movie_genre":"Crime","release_year":2004,"budget":"$526.1M","language":"Punjabi","rating":9},
    {"id":80,"movie_title":"Dersu Uzala","movie_genre":"Adventure","release_year":2004,"budget":"$354.97M","language":"Assamese","rating":8},
    {"id":81,"movie_title":"Very Social Secretary, A","movie_genre":"Comedy","release_year":1997,"budget":"n/a","language":"Aymara","rating":2},
    {"id":82,"movie_title":"The Merry Widow","movie_genre":"Comedy","release_year":1989,"budget":"$1.98B","language":"German","rating":8},
    {"id":83,"movie_title":"Two Sons of Francisco (2 Filhos de Francisco - A História de Zezé di Camargo & Luciano)","movie_genre":"Drama","release_year":1985,"budget":"$2.07B","language":"Sotho","rating":9},
    {"id":84,"movie_title":"Guendalina","movie_genre":"Comedy","release_year":2012,"budget":"$4.72B","language":"Persian","rating":9},
    {"id":85,"movie_title":"Tyler Perry's Why Did I Get Married Too?","movie_genre":"Comedy","release_year":2010,"budget":"$46.22B","language":"Lao","rating":2},
    {"id":86,"movie_title":"The Mark of the Angels - Miserere","movie_genre":"Thriller","release_year":2011,"budget":"$304.81M","language":"Latvian","rating":5},
    {"id":87,"movie_title":"Wicker Park","movie_genre":"Drama","release_year":2006,"budget":"$3.22B","language":"Dzongkha","rating":4},
    {"id":88,"movie_title":"Addicted to Plastic","movie_genre":"Documentary","release_year":2004,"budget":"$408.55M","language":"Burmese","rating":9},
    {"id":89,"movie_title":"Il cappotto di legno","movie_genre":"Drama","release_year":2004,"budget":"$328.94M","language":"Kannada","rating":7},
    {"id":90,"movie_title":"Comandante","movie_genre":"Documentary","release_year":2007,"budget":"$21.26M","language":"Dutch","rating":1},
    {"id":91,"movie_title":"In the Name of the King: A Dungeon Siege Tale","movie_genre":"Action","release_year":2002,"budget":"$5.46B","language":"Bengali","rating":7},
    {"id":92,"movie_title":"Aankhen","movie_genre":"Comedy","release_year":1995,"budget":"$324.21M","language":"Catalan","rating":6},
    {"id":93,"movie_title":"Gremlins","movie_genre":"Comedy","release_year":2003,"budget":"$411.13M","language":"Hiri Motu","rating":5},
    {"id":94,"movie_title":"Starcrash (a.k.a. Star Crash)","movie_genre":"Action","release_year":2008,"budget":"$54.95M","language":"Burmese","rating":7},
    {"id":95,"movie_title":"Shining Night: A Portrait of Composer Morten Lauridsen","movie_genre":"Documentary","release_year":2000,"budget":"$12.18B","language":"Japanese","rating":1},
    {"id":96,"movie_title":"Breaking the Silence: Truth and Lies in the War on Terror","movie_genre":"Documentary","release_year":2004,"budget":"$27.68M","language":"Malayalam","rating":4},
    {"id":97,"movie_title":"Into the Wild","movie_genre":"Action","release_year":1994,"budget":"n/a","language":"Croatian","rating":7},
    {"id":98,"movie_title":"In My Country (a.k.a. Country of My Skull)","movie_genre":"Drama","release_year":2009,"budget":"$199.02M","language":"Haitian Creole","rating":1},
    {"id":99,"movie_title":"TiMER","movie_genre":"Comedy","release_year":1994,"budget":"$4.6B","language":"Greek","rating":4},
    {"id":100,"movie_title":"Movie 43","movie_genre":"Comedy","release_year":2004,"budget":"n/a","language":"Dzongkha","rating":6},
    {"id":101,"movie_title":"Bulworth","movie_genre":"Comedy","release_year":2011,"budget":"$81.37B","language":"Kazakh","rating":6},
    {"id":102,"movie_title":"Fate of a Man (Sudba cheloveka)","movie_genre":"Drama","release_year":2012,"budget":"n/a","language":"Montenegrin","rating":2},
    {"id":103,"movie_title":"Legend of Bagger Vance, The","movie_genre":"Drama","release_year":1993,"budget":"$101.07M","language":"Dhivehi","rating":1},
    {"id":104,"movie_title":"Pickup on South Street","movie_genre":"Film-Noir","release_year":2007,"budget":"$126.72M","language":"Malagasy","rating":9},
    {"id":105,"movie_title":"Man of Straw (Untertan, Der)","movie_genre":"Comedy","release_year":1992,"budget":"$5.53B","language":"Sotho","rating":3},
    {"id":106,"movie_title":"Cops and Robbersons","movie_genre":"Comedy","release_year":1986,"budget":"$7.21B","language":"Czech","rating":7},
    {"id":107,"movie_title":"Tiger Eyes","movie_genre":"Drama","release_year":1993,"budget":"$384.22M","language":"Finnish","rating":1},
    {"id":108,"movie_title":"Intern, The","movie_genre":"Comedy","release_year":2008,"budget":"$220.8M","language":"Assamese","rating":9},
    {"id":109,"movie_title":"Carandiru","movie_genre":"Crime","release_year":2003,"budget":"$9.55B","language":"Punjabi","rating":8},
    {"id":110,"movie_title":"Ricochet","movie_genre":"Action","release_year":2002,"budget":"$150.22M","language":"Hungarian","rating":2},
    {"id":111,"movie_title":"Good Evening, Mr. Wallenberg (God afton, Herr Wallenberg)","movie_genre":"Drama","release_year":1990,"budget":"$14.64B","language":"Dhivehi","rating":4},
    {"id":112,"movie_title":"Ajami","movie_genre":"Crime","release_year":2002,"budget":"$985.94M","language":"Danish","rating":2},
    {"id":113,"movie_title":"Rid of Me","movie_genre":"Comedy","release_year":2010,"budget":"$22.24M","language":"Dari","rating":5},
    {"id":114,"movie_title":"Kounterfeit","movie_genre":"Action","release_year":2000,"budget":"$620.13M","language":"Khmer","rating":1},
    {"id":115,"movie_title":"Arbitrage","movie_genre":"Drama","release_year":2010,"budget":"$35.61B","language":"Haitian Creole","rating":1},
    {"id":116,"movie_title":"1939: Hollywood's Greatest Year","movie_genre":"Documentary","release_year":1998,"budget":"n/a","language":"Quechua","rating":9},
    {"id":117,"movie_title":"Behind Enemy Lines II: Axis of Evil","movie_genre":"Action","release_year":1999,"budget":"$108.87B","language":"Papiamento","rating":3},
    {"id":118,"movie_title":"L.A. Without a Map","movie_genre":"Romance","release_year":2006,"budget":"$2.64B","language":"Khmer","rating":1},
    {"id":119,"movie_title":"Outsourced","movie_genre":"Romance","release_year":2009,"budget":"$1.06B","language":"Italian","rating":9},
    {"id":120,"movie_title":"Stray Cat Rock: Delinquent Girl Boss (Nora-neko rokku: Onna banchô)","movie_genre":"Action","release_year":2009,"budget":"$612.6M","language":"Irish Gaelic","rating":6},
    {"id":121,"movie_title":"Dream Wife","movie_genre":"Comedy","release_year":2005,"budget":"$7.24M","language":"Montenegrin","rating":3},
    {"id":122,"movie_title":"Stranger in Town, A","movie_genre":"Drama","release_year":2004,"budget":"$54.38M","language":"Ndebele","rating":6},
    {"id":123,"movie_title":"Octopussy","movie_genre":"Action","release_year":1998,"budget":"$1.32B","language":"Montenegrin","rating":7},
    {"id":124,"movie_title":"Young Lieutenant, The (Le petit lieutenant)","movie_genre":"Crime","release_year":2009,"budget":"$346.48M","language":"Pashto","rating":5},
    {"id":125,"movie_title":"Three Way","movie_genre":"Crime","release_year":2011,"budget":"n/a","language":"Kazakh","rating":6},
    {"id":126,"movie_title":"Can't Buy Me Love","movie_genre":"Comedy","release_year":1993,"budget":"$194.72M","language":"Norwegian","rating":6},
    {"id":127,"movie_title":"Culture High, The","movie_genre":"Documentary","release_year":1990,"budget":"n/a","language":"Lithuanian","rating":6},
    {"id":128,"movie_title":"Zuzu Angel","movie_genre":"Drama","release_year":2006,"budget":"$120.57B","language":"Montenegrin","rating":5},
    {"id":129,"movie_title":"Europa Europa (Hitlerjunge Salomon)","movie_genre":"Drama","release_year":1996,"budget":"$1.56B","language":"Bislama","rating":1},
    {"id":130,"movie_title":"Atomic Submarine, The","movie_genre":"Sci-Fi","release_year":2000,"budget":"$3.35B","language":"West Frisian","rating":1},
    {"id":131,"movie_title":"Twelve and Holding","movie_genre":"Drama","release_year":1995,"budget":"$159.72M","language":"Polish","rating":6},
    {"id":132,"movie_title":"Nadja","movie_genre":"Drama","release_year":1992,"budget":"n/a","language":"Catalan","rating":2},
    {"id":133,"movie_title":"Adventures of Kitty O'Day (Kitty O'Day Comes Through)","movie_genre":"Comedy","release_year":1985,"budget":"$9.32B","language":"Belarusian","rating":9},
    {"id":134,"movie_title":"Life According to Sam","movie_genre":"Documentary","release_year":2010,"budget":"$2.85B","language":"Filipino","rating":2},
    {"id":135,"movie_title":"Monsterman (Monsterimies)","movie_genre":"Documentary","release_year":2011,"budget":"$4B","language":"Nepali","rating":3},
    {"id":136,"movie_title":"Redemption (Hummingbird)","movie_genre":"Crime","release_year":2006,"budget":"$109.03M","language":"Kannada","rating":9},
    {"id":137,"movie_title":"Majesteit","movie_genre":"Drama","release_year":2008,"budget":"$6.7M","language":"Malagasy","rating":1},
    {"id":138,"movie_title":"Rain","movie_genre":"Drama","release_year":1999,"budget":"n/a","language":"Norwegian","rating":7},
    {"id":139,"movie_title":"Manuel on the Island of Wonders (Manoel dans l'île des merveilles)","movie_genre":"Drama","release_year":1994,"budget":"$10.72B","language":"Bosnian","rating":1},
    {"id":140,"movie_title":"Michael","movie_genre":"Comedy","release_year":1992,"budget":"$61.57M","language":"Khmer","rating":7},
    {"id":141,"movie_title":"Oppai Volleyball (Oppai barê)","movie_genre":"Comedy","release_year":2005,"budget":"$998.43M","language":"Amharic","rating":2},
    {"id":142,"movie_title":"Mrs. Dalloway","movie_genre":"Drama","release_year":1975,"budget":"$51.95B","language":"Somali","rating":5},
    {"id":143,"movie_title":"Eye In The Sky (Gun chung)","movie_genre":"Crime","release_year":2002,"budget":"$3.18B","language":"Swedish","rating":9},
    {"id":144,"movie_title":"Woman on the Beach, The","movie_genre":"Drama","release_year":1995,"budget":"n/a","language":"Czech","rating":9},
    {"id":145,"movie_title":"Outside Satan (Hors Satan)","movie_genre":"Drama","release_year":1989,"budget":"n/a","language":"Haitian Creole","rating":4},
    {"id":146,"movie_title":"This Happy Breed","movie_genre":"Comedy","release_year":2013,"budget":"$6.79B","language":"Swedish","rating":2},
    {"id":147,"movie_title":"Holy Rollers","movie_genre":"Crime","release_year":1998,"budget":"$9.66B","language":"Estonian","rating":1},
    {"id":148,"movie_title":"Narcissus","movie_genre":"Musical","release_year":2012,"budget":"n/a","language":"Swati","rating":3},
    {"id":149,"movie_title":"Warlock","movie_genre":"Action","release_year":1988,"budget":"$142.71M","language":"Maltese","rating":8},
    {"id":150,"movie_title":"Men of Means","movie_genre":"Action","release_year":2006,"budget":"n/a","language":"Macedonian","rating":9},
    {"id":151,"movie_title":"Reparando","movie_genre":"Documentary","release_year":2004,"budget":"$146.29M","language":"Arabic","rating":4},
    {"id":152,"movie_title":"Beauty and the Beast (La belle et la bête)","movie_genre":"Drama","release_year":2006,"budget":"$660.53M","language":"Burmese","rating":3},
    {"id":153,"movie_title":"Together Again","movie_genre":"Comedy","release_year":1991,"budget":"$1.73B","language":"Azeri","rating":2},
    {"id":154,"movie_title":"Hopscotch","movie_genre":"Comedy","release_year":2000,"budget":"$565.52M","language":"Arabic","rating":3},
    {"id":155,"movie_title":"Days of Wine and Roses","movie_genre":"Drama","release_year":1995,"budget":"$2.35B","language":"Armenian","rating":8},
    {"id":156,"movie_title":"Halloween","movie_genre":"Horror","release_year":1986,"budget":"n/a","language":"Swedish","rating":9},
    {"id":157,"movie_title":"Side by Side","movie_genre":"Documentary","release_year":2012,"budget":"$32.96B","language":"Swedish","rating":2},
    {"id":158,"movie_title":"Stay Cool","movie_genre":"Comedy","release_year":1992,"budget":"$50.03B","language":"Albanian","rating":5},
    {"id":159,"movie_title":"Blackout (Murder by Proxy)","movie_genre":"Crime","release_year":2001,"budget":"$8.55B","language":"Bengali","rating":1},
    {"id":160,"movie_title":"Love Is News","movie_genre":"Comedy","release_year":2008,"budget":"$543.65M","language":"New Zealand Sign Language","rating":4},
    {"id":161,"movie_title":"Civic Duty","movie_genre":"Drama","release_year":1999,"budget":"$556.34M","language":"Swedish","rating":4},
    {"id":162,"movie_title":"Peace, Love & Misunderstanding","movie_genre":"Drama","release_year":2011,"budget":"$390.56M","language":"Afrikaans","rating":4},
    {"id":163,"movie_title":"Circle of Iron","movie_genre":"Action","release_year":2009,"budget":"n/a","language":"Malayalam","rating":7},
    {"id":164,"movie_title":"Game of Werewolves","movie_genre":"Comedy","release_year":1999,"budget":"$215.37M","language":"Khmer","rating":5},
    {"id":165,"movie_title":"Bungee Jumping of Their Own (Beonjijeompeureul hada)","movie_genre":"Drama","release_year":2007,"budget":"$529.78M","language":"Gujarati","rating":1},
    {"id":166,"movie_title":"Rapa Nui","movie_genre":"Action","release_year":2008,"budget":"$16.14M","language":"Malayalam","rating":9},
    {"id":167,"movie_title":"Broadway Melody of 1938","movie_genre":"Musical","release_year":2012,"budget":"$107.22M","language":"Filipino","rating":8},
    {"id":168,"movie_title":"Four Feathers, The","movie_genre":"Adventure","release_year":1989,"budget":"$556.53M","language":"Czech","rating":1},
    {"id":169,"movie_title":"Spring Fever","movie_genre":"Comedy","release_year":2000,"budget":"$725.48M","language":"Guaraní","rating":4},
    {"id":170,"movie_title":"Cry 'Havoc'","movie_genre":"Drama","release_year":1983,"budget":"$12.29M","language":"Belarusian","rating":7},
    {"id":171,"movie_title":"Johnny Stecchino","movie_genre":"Comedy","release_year":1998,"budget":"$3.23B","language":"Latvian","rating":9},
    {"id":172,"movie_title":"Partners","movie_genre":"Comedy","release_year":2009,"budget":"$1.09B","language":"Tajik","rating":3},
    {"id":173,"movie_title":"Yossi (Ha-Sippur Shel Yossi)","movie_genre":"Drama","release_year":2004,"budget":"$1.6B","language":"Tsonga","rating":4},
    {"id":174,"movie_title":"Company: Original Cast Album","movie_genre":"Documentary","release_year":1995,"budget":"$293.53M","language":"Filipino","rating":2},
    {"id":175,"movie_title":"Under the Yum Yum Tree","movie_genre":"Comedy","release_year":1989,"budget":"$1.02B","language":"Guaraní","rating":6},
    {"id":176,"movie_title":"Kingdom of Heaven","movie_genre":"Action","release_year":2011,"budget":"n/a","language":"Romanian","rating":7},
    {"id":177,"movie_title":"Beautiful Creatures","movie_genre":"Drama","release_year":2006,"budget":"$20.32B","language":"Gagauz","rating":5},
    {"id":178,"movie_title":"Hills Have Eyes Part II, The","movie_genre":"Horror","release_year":1996,"budget":"$74.88M","language":"Georgian","rating":6},
    {"id":179,"movie_title":"Only Lovers Left Alive","movie_genre":"Drama","release_year":1992,"budget":"$20.99B","language":"Filipino","rating":7},
    {"id":180,"movie_title":"Demon Wind","movie_genre":"Horror","release_year":1997,"budget":"$13.93B","language":"Pashto","rating":6},
    {"id":181,"movie_title":"Jerusalema (Gangster's Paradise: Jerusalema)","movie_genre":"Action","release_year":1993,"budget":"$759.26M","language":"Dzongkha","rating":1},
    {"id":182,"movie_title":"My Dear Desperado","movie_genre":"Comedy","release_year":2007,"budget":"$47.65M","language":"Danish","rating":1},
    {"id":183,"movie_title":"Clockmaker of St. Paul, The (L'horloger de Saint-Paul)","movie_genre":"Crime","release_year":2002,"budget":"$71.56M","language":"Quechua","rating":3},
    {"id":184,"movie_title":"X Games 3D: The Movie","movie_genre":"Documentary","release_year":1994,"budget":"$325.51M","language":"Arabic","rating":9},
    {"id":185,"movie_title":"Lucia","movie_genre":"Drama","release_year":2006,"budget":"$5.1B","language":"Somali","rating":9},
    {"id":186,"movie_title":"Emma","movie_genre":"Comedy","release_year":1990,"budget":"$871.78M","language":"Kashmiri","rating":2},
    {"id":187,"movie_title":"Capturing the Friedmans","movie_genre":"Documentary","release_year":2011,"budget":"$20.99B","language":"Māori","rating":9},
    {"id":188,"movie_title":"Snow Queen, The (Lumikuningatar)","movie_genre":"Children","release_year":2003,"budget":"$1.88B","language":"Oriya","rating":3},
    {"id":189,"movie_title":"Come Blow Your Horn","movie_genre":"Comedy","release_year":2004,"budget":"$1.69B","language":"Norwegian","rating":2},
    {"id":190,"movie_title":"Favela Rising","movie_genre":"Documentary","release_year":2004,"budget":"$901.61M","language":"Hungarian","rating":7},
    {"id":191,"movie_title":"Opera","movie_genre":"Crime","release_year":2007,"budget":"$13.7B","language":"Malayalam","rating":7},
    {"id":192,"movie_title":"Culloden (The Battle of Culloden)","movie_genre":"Documentary","release_year":2003,"budget":"$1.04B","language":"English","rating":1},
    {"id":193,"movie_title":"Eleventh Hour, The","movie_genre":"Action","release_year":2001,"budget":"$93.37M","language":"Swahili","rating":6},
    {"id":194,"movie_title":"Planet Hulk","movie_genre":"Animation","release_year":1987,"budget":"$50.2B","language":"Tok Pisin","rating":4},
    {"id":195,"movie_title":"Atlantic City","movie_genre":"Crime","release_year":2000,"budget":"$8.61M","language":"Croatian","rating":3},
    {"id":196,"movie_title":"External Affairs","movie_genre":"Drama","release_year":1993,"budget":"$217.12B","language":"Belarusian","rating":9},
    {"id":197,"movie_title":"Wild in the Country","movie_genre":"Drama","release_year":2012,"budget":"$43.49B","language":"Kurdish","rating":3},
    {"id":198,"movie_title":"Where's Poppa?","movie_genre":"Comedy","release_year":1997,"budget":"n/a","language":"Fijian","rating":7},
    {"id":199,"movie_title":"Stiff Upper Lips","movie_genre":"Comedy","release_year":2000,"budget":"$1.35B","language":"Irish Gaelic","rating":2},
    {"id":200,"movie_title":"Dead Next Door, The","movie_genre":"Horror","release_year":2007,"budget":"$937.55M","language":"Latvian","rating":8},
    {"id":201,"movie_title":"Kilometre Zero (Kilomètre zéro)","movie_genre":"Drama","release_year":2007,"budget":"$12.76B","language":"Irish Gaelic","rating":9},
    {"id":202,"movie_title":"Wizard of Oz, The","movie_genre":"Adventure","release_year":1996,"budget":"$417.14M","language":"Greek","rating":9},
    {"id":203,"movie_title":"The Road to Glory","movie_genre":"Drama","release_year":2004,"budget":"$47.71M","language":"Dzongkha","rating":1},
    {"id":204,"movie_title":"Black Christmas","movie_genre":"Action","release_year":2010,"budget":"$184.63M","language":"Estonian","rating":3},
    {"id":205,"movie_title":"Everybody's Got Somebody... Not Me","movie_genre":"Drama","release_year":2001,"budget":"$300.86M","language":"Tsonga","rating":2},
    {"id":206,"movie_title":"Dark House, The (Dom zly)","movie_genre":"Crime","release_year":1998,"budget":"n/a","language":"Czech","rating":3},
    {"id":207,"movie_title":"Marrying Man, The (Too Hot to Handle)","movie_genre":"Comedy","release_year":2000,"budget":"$162.03M","language":"Luxembourgish","rating":5},
    {"id":208,"movie_title":"Flintstones in Viva Rock Vegas, The","movie_genre":"Children","release_year":1995,"budget":"n/a","language":"Albanian","rating":8},
    {"id":209,"movie_title":"Gremlins","movie_genre":"Comedy","release_year":2000,"budget":"$12.16M","language":"Macedonian","rating":5},
    {"id":210,"movie_title":"Blind Mountain (Mang shan)","movie_genre":"Drama","release_year":1969,"budget":"$276.36M","language":"Oriya","rating":3},
    {"id":211,"movie_title":"Motel Hell","movie_genre":"Comedy","release_year":2009,"budget":"n/a","language":"Kashmiri","rating":6},
    {"id":212,"movie_title":"Lost Embrace (Abrazo partido, El)","movie_genre":"Comedy","release_year":2008,"budget":"$1.09B","language":"Lithuanian","rating":4},
    {"id":213,"movie_title":"Third Miracle, The","movie_genre":"Drama","release_year":2011,"budget":"$395.17M","language":"Telugu","rating":4},
    {"id":214,"movie_title":"Taming of the Shrew, The","movie_genre":"Comedy","release_year":2012,"budget":"$447.05M","language":"Tajik","rating":4},
    {"id":215,"movie_title":"Stardom","movie_genre":"Comedy","release_year":1987,"budget":"$267.88M","language":"Czech","rating":1},
    {"id":216,"movie_title":"Without Love","movie_genre":"Comedy","release_year":1995,"budget":"$4.08B","language":"Chinese","rating":9},
    {"id":217,"movie_title":"Switching Goals","movie_genre":"Children","release_year":1992,"budget":"$45.41M","language":"Tok Pisin","rating":1},
    {"id":218,"movie_title":"My Friend Ivan Lapshin (Moy drug Ivan Lapshin)","movie_genre":"Drama","release_year":1987,"budget":"$3.89B","language":"Papiamento","rating":9},
    {"id":219,"movie_title":"My Sister Eileen","movie_genre":"Comedy","release_year":2001,"budget":"$344.36M","language":"Armenian","rating":8},
    {"id":220,"movie_title":"Thomas in Love (Thomas est Amoureux)","movie_genre":"Comedy","release_year":2004,"budget":"$4.42B","language":"Aymara","rating":3},
    {"id":221,"movie_title":"Big Bounce, The","movie_genre":"Comedy","release_year":1990,"budget":"$178.38M","language":"Hindi","rating":1},
    {"id":222,"movie_title":"Vice Versa","movie_genre":"Comedy","release_year":2009,"budget":"$421.64M","language":"Marathi","rating":2},
    {"id":223,"movie_title":"Cool, Calm and Collected (Calmos)","movie_genre":"Comedy","release_year":2011,"budget":"n/a","language":"Haitian Creole","rating":4},
    {"id":224,"movie_title":"Pokémon: The First Movie","movie_genre":"Adventure","release_year":1996,"budget":"n/a","language":"Catalan","rating":9},
    {"id":225,"movie_title":"Dreamlife of Angels, The (Vie rêvée des anges, La)","movie_genre":"Drama","release_year":2012,"budget":"$1.92B","language":"Hebrew","rating":1},
    {"id":226,"movie_title":"Sexual Chronicles of a French Family ","movie_genre":"Comedy","release_year":1992,"budget":"$40.32M","language":"Hindi","rating":1},
    {"id":227,"movie_title":"Return to Sender","movie_genre":"Drama","release_year":2009,"budget":"$208.41M","language":"Swati","rating":5},
    {"id":228,"movie_title":"Naughty Girl","movie_genre":"Comedy","release_year":1988,"budget":"$167.21M","language":"Malayalam","rating":1},
    {"id":229,"movie_title":"Parisienne, La (Une parisienne)","movie_genre":"Comedy","release_year":2008,"budget":"n/a","language":"Kurdish","rating":2},
    {"id":230,"movie_title":"Snake Pit, The","movie_genre":"Drama","release_year":2008,"budget":"$7.68B","language":"Yiddish","rating":6},
    {"id":231,"movie_title":"Mugabe and the White African","movie_genre":"Documentary","release_year":1992,"budget":"$1.87B","language":"Tok Pisin","rating":3},
    {"id":232,"movie_title":"Skin, Skin (Käpy selän alla)","movie_genre":"Drama","release_year":1997,"budget":"$127.36B","language":"Guaraní","rating":3},
    {"id":233,"movie_title":"Madam Satan","movie_genre":"Comedy","release_year":2008,"budget":"n/a","language":"Azeri","rating":5},
    {"id":234,"movie_title":"Oscar","movie_genre":"Comedy","release_year":2001,"budget":"$3.72B","language":"Thai","rating":7},
    {"id":235,"movie_title":"Pokemon 4 Ever (a.k.a. Pokémon 4: The Movie)","movie_genre":"Adventure","release_year":1998,"budget":"$7.53B","language":"Portuguese","rating":5},
    {"id":236,"movie_title":"Private Life of Henry VIII, The","movie_genre":"Comedy","release_year":1994,"budget":"n/a","language":"Papiamento","rating":3},
    {"id":237,"movie_title":"Fast Food Nation","movie_genre":"Drama","release_year":1996,"budget":"$452.03M","language":"Hebrew","rating":9},
    {"id":238,"movie_title":"Earth (Tierra)","movie_genre":"Drama","release_year":1992,"budget":"n/a","language":"Portuguese","rating":6},
    {"id":239,"movie_title":"Hedda Gabler","movie_genre":"Drama","release_year":2011,"budget":"$33.53B","language":"Danish","rating":3},
    {"id":240,"movie_title":"Occurrence at Owl Creek Bridge, An (La rivière du hibou)","movie_genre":"Drama","release_year":2001,"budget":"$543.15M","language":"Moldovan","rating":6},
    {"id":241,"movie_title":"1941","movie_genre":"Comedy","release_year":1995,"budget":"$342.25M","language":"Bislama","rating":6},
    {"id":242,"movie_title":"Patton Oswalt: My Weakness Is Strong","movie_genre":"Comedy","release_year":2013,"budget":"$45.41M","language":"Fijian","rating":2},
    {"id":243,"movie_title":"Team America: World Police","movie_genre":"Action","release_year":1995,"budget":"$1.22B","language":"Burmese","rating":2},
    {"id":244,"movie_title":"Eggs","movie_genre":"Comedy","release_year":2010,"budget":"$8.81B","language":"Bosnian","rating":6},
    {"id":245,"movie_title":"It Should Happen to You","movie_genre":"Comedy","release_year":2004,"budget":"$38.42B","language":"West Frisian","rating":3},
    {"id":246,"movie_title":"Ramona and Beezus","movie_genre":"Children","release_year":1988,"budget":"$1.17B","language":"Hindi","rating":3},
    {"id":247,"movie_title":"Tables Turned on the Gardener","movie_genre":"Comedy","release_year":2010,"budget":"$636.64M","language":"Moldovan","rating":3},
    {"id":248,"movie_title":"Sleeper","movie_genre":"Comedy","release_year":2002,"budget":"$431.76M","language":"Pashto","rating":9},
    {"id":249,"movie_title":"102 Minutes That Changed America","movie_genre":"Documentary","release_year":2010,"budget":"$1.16B","language":"Japanese","rating":2},
    {"id":250,"movie_title":"Paranormal Activity 3","movie_genre":"Horror","release_year":1996,"budget":"$1.27B","language":"Icelandic","rating":3}]
    },{}],3:[function(require,module,exports){
    const { getAll } = require("./controllers/movie.js");
    
    const renderTable = (data) => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
    
      let source = data;
      const params = new URLSearchParams(window.location.search);
        const movie_title_term = params.get("movieTitle");
        const movie_genre_term = params.getAll("movie_genre");
        const release_year_term = params.get("releaseYear");
        const budget_term = params.get("budget");
        const language_term = params.get("language");
        const rating_term = params.get("rating");
      //movie_title filter
      if (movie_title_term) {
        source = source.filter(({ movie_title }) => movie_title.toLowerCase().includes(movie_title_term.toLowerCase()));
      }
      
      //rating filter
      if (rating_term) {
        source = source.filter(({ rating }) => 
             rating == (rating_term),
             document.getElementById(`${rating_term}`).checked = true
      );
    }
      //movie_genre checkbox filter
      if (movie_genre_term.length != 0) {
          const newdata =  movie_genre_term.map((item) =>
           (source.filter(({ movie_genre }) => 
                movie_genre === item,
                document.getElementById(`boxcheck${item}`).checked = true,
            
          )));   source = newdata.flat();
        }
      //release year filter
      if (release_year_term) {
        if (release_year_term > 0)
              source = source.filter(({ release_year }) =>
               release_year == (release_year_term),
          document.getElementById(`${release_year_term}`).selected = true);
        }
    //language filter    
 if (language_term) {
  if (language_term != 0)
        source = source.filter(({ language }) =>
        language === (language_term),
    document.getElementById(`${language_term}`).selected = true);
  }  

      const rows = source.reduce(
        (acc, { id, movie_title, movie_genre, release_year,budget, language,rating}) =>
          acc +
          `<tr id="table-row-${id}">
          <td>${id}</td>
          <td>${movie_title}</td>
          <td>${movie_genre}</td>
          <td>${release_year}</td>
          <td>${budget}</td>
           <td>${language}</td>
           <td>${rating}</td></tr>`,
        ``
      );
      
      tableBody.innerHTML = rows;
    };
    
    //dynamic checkbox with sorted genres
    const renderGenre = (data) => {
        const divGenre = document.getElementById("divGenre");
        const Genre = data.map(item => item.movie_genre).filter((value, index, self) => self.indexOf(value) === index).sort();
        const movie_genres = Genre.reduce(
        (acc, movie_genre) => 
                        acc + 
                        `<input type="checkbox" name="movie_genre" id="boxcheck${movie_genre}" value="${movie_genre}">
                         <label class="boxcheck" for="boxcheck${movie_genre}">${movie_genre}</label>`
        , []);
        divGenre.innerHTML = movie_genres;
    };
    
    //dynamic radio buttons with sorted ratings
    const renderRating = (data) => {
        const ratingRadio = document.getElementById("divRating");
      const Rating = data.map(item => item.rating).filter((value, index, self) => self.indexOf(value) === index).sort();
      const rating = Rating.reduce(
        (acc, rating) => 
                        acc + 
                        `<input type="radio" id="${rating}" name="rating" value="${rating}">
                         <label class="radioClass" for="${rating}">${rating}</label>`
        , []);
        ratingRadio.innerHTML = rating;
    };
    
    //dynamic dropdown with sorted years
    const renderYear = (data) => {
        const ddlYear = document.getElementById("releaseYear");
        const Year = data.map(item => item.release_year).filter((value, index, self) => self.indexOf(value) === index).sort();
        const releaseYears = Year.reduce(
        (acc, release_year) => 
                        acc + `<option id="${release_year}" value="${release_year}">${release_year}</option>`
        , []);
      ddlYear.innerHTML = `<option value="0"> Select Release Year</option>` + releaseYears;
    };
     //dynamic dropdown with sorted languages
     const renderLanguage = (data) => {
      const ddlLanguage = document.getElementById("language");
      const Language = data.map(item => item.language).filter((value, index, self) => self.indexOf(value) === index).sort();
      const languages = Language.reduce(
      (acc, language) => 
                      acc + `<option id="${language}" value="${language}">${language}</option>`
      , []);
      ddlLanguage.innerHTML = `<option value="0">Select Language</option>` + languages;
  };
    getAll().then(({ data }) => {
        renderGenre(data);
        renderRating(data);
        renderYear(data);
        renderLanguage(data);
        renderTable(data);
    });
    
    },{"./controllers/movie.js":1}]},{},[3]);