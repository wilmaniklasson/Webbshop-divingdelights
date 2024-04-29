export const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Namnet får inte vara tomt.';
        if (value.length < 2 || value.length > 50) return 'Namnet måste vara mellan 2 och 50 tecken.';
        return '';
 
      case 'category':
        if (!value) return 'Du måste välja en kategori.';
        return '';

      case 'price':
        if (value <= 0) return 'Priset måste vara större än 0.';
        return '';
 
      case 'color':
        if (!value.trim()) return 'Färgen får inte vara tom.';
        if (value.length < 2 || value.length > 50) return 'Färgen måste vara mellan 2 och 50 tecken.';
        return '';
 
      case 'image':
        if (!value.trim()) return 'Bildlänken får inte vara tom.';
        const regex = /\.(jpeg|jpg|png|webp)$/i;
        if (!regex.test(value)) return 'Bildlänken måste vara en URL som slutar med .jpg, .jpeg, .png eller .webp.';
        return '';
 
      case 'description':
        if (!value.trim()) return 'Beskrivningen får inte vara tom.';
        if (value.length > 1000) return 'Beskrivningen får inte överskrida 1000 tecken.';
        return '';
 
      default:
        return '';
    }
  };
 
  