function sendWhatsApp(e) {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const tel = document.getElementById('tel').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const heure = document.getElementById('heure').value;
    const msg = document.getElementById('message').value;

    const fullMessage = `🛠️ *Demande de Rendez-vous - Garage Auto Pro*%0A%0A` +
                        `👤 *Nom:* ${nom}%0A` +
                        `📞 *Tél:* ${tel}%0A` +
                        `🔧 *Service:* ${service}%0A` +
                        `📅 *Le:* ${date} à ${heure}%0A` +
                        `💬 *Notes:* ${msg}`;

    const phoneNumber = "261326006601";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    window.open(whatsappUrl, '_blank');
}
function orderPiece(nomPiece) {
    const text = `Bonjour, je souhaite commander la pièce : *${nomPiece}*`;
    window.open(`https://wa.me/261326006601?text=${encodeURIComponent(text)}`, '_blank');
}