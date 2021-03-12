export const viewJeuPropose = (element) => {

    element.innerHTML=`
    <h1>Jeu proposé</h1>

    <h1>Mario Kart 8 Deluxe</h1>
    <img alt="Jeu Mario Kart 8" src="https://fr.shopping.rakuten.com/photo/mario-kart-8-deluxe-1102753114_ML.jpg">
    <h3>59€</h3>
    </div>
    <section>
        <h2>Caractéristiques</h2>
        <div>
            Bananes et carapaces sur place ou à emporter !
            Appuyez sur le champignon et affûtez vos carapaces, Mario Kart 8 Deluxe va tout retourner sur Nintendo
            Switch ! Foncez à fond les ballons la tête à l'envers avec les pneus anti-gravité ! Irez-vous plus vite en
            passant par le plafond ? Ou allez-vous tracer au sol entre les bananes et les batailles de carapace ? Tous
            les coups les plus fourbes sont permis pour se hisser à la première place ! Maîtriser tous les pouvoirs
            comme la plume pour éviter les mauvaises surprises, ou encore le fantôme pour devenir invisible dans les 48
            circuits légendaires !</h4>
        </div>
    </section>
    <section>
        <h2>Plateforme</h2>
        <div>Nitendo Switch</div>
    </section>
    <section>
        <h2>Disponibilité</h2>
        <div>En stock</div>
    </section>
    <section>
        <form method="GET" action="https://www.nintendo.fr/Jeux/Nintendo-Switch/Mario-Kart-8-Deluxe-1173281.html">

            <input type="submit" class="mon-bouton-oui" value="Oui je le veux !">
        </form>
    </section>
    <br>
    <section>
        <form action="../www/preferences.html">
            <button type="submit" class="mon-bouton-non">J'en veux un autre</button>
        </form>
    </section>
    <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
    `}