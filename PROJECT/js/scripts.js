// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    //This code is for set the inner HTML of the <header> element
    document.querySelector('header').innerHTML = `
    <!--This code is for creating a heading for the header -->
        <h1>Vintage electronics Store</h1>
        <!-- This code is for creating a navigation bar within the header -->
        <nav><!-- This code is for creating an unordered list for navigation links -->
            <ul><!--From here ul begins-->
               <!-- This code is for list item with a link to the Home page -->
                <li><a href="index.html">Home</a></li>

                <!-- This code is for list item with a link to the About page -->
                <li><a href="about.html">About</a></li>

                <!-- This code is for list item with a link to the Shop page -->
                <li><a href="shop.html">Shop</a></li>

                <!-- This code is for list item with a link to the Contact page -->
                <li><a href="contact.html">Contact</a></li>
                
            </ul><!-- here ul ends-->
        </nav>
    `;

    document.querySelector('footer').innerHTML = `
        <p>&copy; 1079 Vintage electronics Store. All rights reserved.</p>
        <!-- This paragraph element is for the footer with a copyright notice -->
    `;
});
