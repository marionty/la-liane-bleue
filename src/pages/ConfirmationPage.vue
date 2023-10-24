<template>
<p>En réservant, vous acceptez nos conditions générales de vente</p>
<q-checkbox v-model="termsAccepted" label="J'ai lu et j'accepte les conditions générales de vente et le Règlement intérieur de la Liane Bleue pour une réservation de la location 'Alizée' ou pour une réservation de la location 'Bourbon'."/>
<p>Nous vous remercions pour votre réservation. Un email de confirmation vous sera envoyé prochainement afin de confirmer les détails de votre réservation ainsi que vos coordonnées.</p>

<p>Veuillez noter que votre réservation sera finalisée une fois que nous aurons réceptionné l'acompte de 30%. Les détails concernant le paiement de cet acompte seront inclus dans l'email de confirmation.</p>

<p>Nous vous remercions de votre confiance et restons à votre disposition pour toute question ou clarification.</p>
:disabled="!termsAccepted"
</template>

<script setup>

const termsAccepted = ref(false);
</script>
