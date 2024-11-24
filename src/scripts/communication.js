const handleOpenWhatsapp = ({ message }) => {
    const url = `https://wa.me/573216371230?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

export { handleOpenWhatsapp };
