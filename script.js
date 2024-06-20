document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const benefits = document.getElementById('benefits');
    const price = document.getElementById('price');
    const productImage = document.getElementById('product-image');
    const ageSlider = document.getElementById('age-slider');

    const products = [
        {
            title: "Mini Pod",
            description: "Our round mini pod is the perfect beginning for your baby's journey. Crafted with love & sustainability in mind, our mini pod provides a cosy & safe sleeping space for infants up to 12 months. With the best fabric to have as your first touch.",
            benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
            price: "Rs. 31000 (including taxes)",
            image: "image1.png"
        },
        {
            title: "Cozy Pod",
            description: "Transitioning into the toddler years, our round mini pod evolves into a stylish lounge chair, providing a comfortable seating space for children aged 3 to 10. You can enhance it with a lounge chair hood as an add-on for extra cosiness.",
            benefits: ["Benefit B1", "Benefit B2", "Benefit B3"],
            price: "Rs. 45000 (including taxes)",
            image: "image2.png"
        },
        {
            title: "Large Pod / Sofa Bed",
            description: "As your child grows, so does our crib. The round mini crib seamlessly transforms into an extended crib with the help of our storage extension which make it suitable for ages 1 to 3. It can be kept adjacent to your bed for added convenience.",
            benefits: ["Benefit C1", "Benefit C2", "Benefit C3"],
            price: "Rs. 56000 (including taxes)",
            image: "image3.png"
        },
        {
            title: "Play House",
            description: "Foster imaginative play with our playhouse option, designed for children aged 3 to 10. By removing a segment from the extended crib & adding the playhouse hood, you create a spacious play area inspired by the Kutch Bhunga.",
            benefits: ["Benefit D1", "Benefit D2", "Benefit D3"],
            price: "Rs. 85000 (including taxes)",
            image: "image4.png"
        }
    ];

    ageSlider.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        const product = products[value];

        title.textContent = product.title;
        description.textContent = product.description;
        price.textContent = product.price;

        benefits.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefits.appendChild(li);
        });

        const newImage = new Image();
        newImage.src = product.image;
        newImage.onload = () => {
            productImage.style.transform = 'scale(0.9)';
            productImage.style.opacity = 0;
            setTimeout(() => {
                productImage.src = product.image;
                productImage.style.transform = 'scale(1)';
                productImage.style.opacity = 1;
            }, 500);
        };

        newImage.onerror = () => {
            console.error("Failed to load image:", product.image);
        };
    });
});
