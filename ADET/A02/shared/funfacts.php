<h2 class="funfactTitle">Fun Facts</h2>

<div class="funfactContainer">
    <div class="funfactMainImage">
        <img src="./img/funfactSS1.png" alt="Fun Fact Image">
    </div>
    <div class="funfactInfo">
        <h3>Fun Facts!</h3>
        <p>Click the cards to reveal surprising facts about your favorite shows and characters!</p>
    </div>
</div>

<div class="containerCard">
    <?php
    // Define the FunFact class
    class FunFact
    {
        public $title;
        public $image;
        public $fact;

        // Constructor to initialize the properties and immediately print the HTML
        public function __construct($title, $image, $fact)
        {
            $this->title = $title;
            $this->image = $image;
            $this->fact = $fact;

            // Directly echo the HTML when the object is created
            echo "
                <div class='funfactCard' onclick='revealFunFact(this)'>
                    <div class='funfactImage' style='background-image: url(./img/{$this->image});'></div>
                    <div class='funfactContent'>
                        <h5 class='funfactShow'>{$this->title}</h5>
                        <p class='funfactText'>{$this->fact}</p>
                    </div>
                </div>
            ";
        }
    }

    new FunFact("The Big Bang Theory", "funfact1.png", "The character of Sheldon Cooper (played by Jim Parsons) was originally written as a secondary character, but Jim Parsons’ incredible performance made Sheldon the breakout star, leading to him becoming the show's central character.");
    new FunFact("Abbott Elementary", "funfact2.png", "The creator of the show, Quinta Brunson, made history as the first Black woman to win the award for Outstanding Comedy Series at the Primetime Emmy Awards as both a creator and lead actress.");
    new FunFact("Everything Everywhere All at Once", "funfact3.png", "The directors, Daniel Kwan and Daniel Scheinert (known as the Daniels), initially wrote the script for the movie as a small family drama, but the concept evolved into a genre-defying multiverse film after discussions with their creative team.");
    new FunFact("The Lord of the Rings", "funfact4.png", "The films were shot in New Zealand, and the crew had to create entire villages and landscapes from scratch. In fact, the forests of Lothlórien were filmed in the Tongariro National Park, a UNESCO World Heritage site.");
    new FunFact("Attack on Titan", "funfact5.png", "The inspiration behind the titans came from creator Hajime Isayama's childhood fear of a giant, terrifying creature, which led him to develop the concept of massive humanoid creatures that invoke both fascination and terror.");
    ?>
</div>

<script>
    function revealFunFact(element) {
        const text = element.querySelector('.funfactText');
        if (text.style.display === 'none') {
            text.style.display = 'block'; // Reveal the text
        } else {
            text.style.display = 'none'; // Hide the text
        }
    }

    function revealFunFact(element) {
        element.classList.toggle('active');
    }
</script>