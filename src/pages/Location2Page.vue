<template>
  <q-page-container>
    <!-- Titre de la page -->
    <h2 class="text-center mt-4">Bungalow à Saint-Leu, Île de la Réunion</h2>

    <!-- Informations sur le bungalow -->
    <div class="row">
      <div class="col-md-6">
        <q-img src="bourbon.JPG" alt="Bungalow à Saint-Leu" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h3>Caractéristiques du Bungalow</h3>
        <ul>
          <li>Surface : 40 m2</li>
          <li>Varangue et parking privé</li>
          <li>Wi-Fi gratuit</li>
          <li>Cuisine équipée</li>
          <li>1 chambre avec 2 couchages</li>
          <li>1 séjour avec 2 couchages et écran plat</li>
          <li>1 salle de douche avec toilettes</li>
        </ul>
      </div>
    </div>

    <!-- Tarifs -->
    <div class="mt-4">
      <h3>Tarifs</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Durée de Séjour</th>
            <th>2 Personnes</th>
            <th>4 Personnes</th>
            <th>Nuitée (2 Personnes)</th>
            <th>Nuitée (4 Personnes)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1ère semaine</td>
            <td>520€</td>
            <td>650€</td>
            <td>75€</td>
            <td>95€</td>
          </tr>
          <tr>
            <td>À partir de la 2ème semaine</td>
            <td>490€</td>
            <td>600€</td>
            <td>70€</td>
            <td>86€</td>
          </tr>
          <tr>
            <td>3ème semaine</td>
            <td>455€</td>
            <td>475€</td>
            <td>65€</td>
            <td>68€</td>
          </tr>
          <tr>
            <td>Location de 30 jours et plus</td>
            <td>61€</td>
            <td>66€</td>
            <td>61€</td>
            <td>66€</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Conditions de réservation -->
    <div class="mt-4">
      <h3>Conditions de Réservation</h3>
      <p>
        Un acompte de 30% doit être versé dès que vous réservez pour confirmer
        la réservation du bungalow. Pour plus d'informations ou pour réserver,
        veuillez nous contacter.
      </p>
    </div>

    <!-- Contact -->
    <div class="mt-4">
      <h3>Contactez-nous</h3>
      <p>
        Pour toute demande d'information ou pour réserver, n'hésitez pas à nous
        contacter :
      </p>
      <p>
        Email : votre@email.com<br />
        Téléphone : +33 123 456 789
      </p>
    </div>
  </q-page-container>
</template>

<style scoped>
/* Styles personnalisés */
.img-fluid {
  max-width: 100%;
}
</style>
<script setup></script>
