export const viewAccueil = (element) => {
    element.innerHTML =`<h1>S'inscrire</h1>
 
<form action class="container">
    <p>Déjà Membre ? Connexion</p>
    <div class="row">
        <div id="connexiongoogle" class="waves-effect waves-light btn social google col s7 offset-s3">
            <i class="fa fa-google"></i>Se connecter via Google
        </div>
    </div>
    <div class="row">
        <div id="connexionfacebook" class="waves-effect waves-light btn social facebook col s7 offset-s3">
            <i class="fa fa-facebook"></i>Se connecter via Facebook
        </div>
    </div>
    <div class="row">
        <div class="col s7 offset-s3">
            <div class="row">
                <p>ou par e-mail</p>
                <div class="input-field col s10">
                    <i class="material-icons prefix">textsms</i>
                    <input type="text" id="autocomplete-input" class="mailadresscol s6 offset-s3">
                    <label for="autocomplete-input">Adresse e-mail</label>
                </div>
                <div class="input-field col s10">
                    <i class="material-icons prefix">textsms</i>
                    <input type="text" id="autocomplete-input" class="passwordcol s6 offset-s3">
                    <label for="autocomplete-input">Mot de passe</label>
                </div>
            </div>
        </div>
    </div>
    <section>
 
        <p>
            <label>
                <input type="checkbox" class="filled-in" checked="checked">
                <span>Se souvenir</span>
            </label>
        <p>
 
    </section>
</form>
<p>Mot de passe oublié ?</p>
<a class="waves-effect waves-light btn">Se connecter</a>`
};