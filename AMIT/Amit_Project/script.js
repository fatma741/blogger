var header = document.getElementById("header");
var left = document.getElementById("cards");
var right = document.getElementById("right_card");
var down=document.getElementById("down")

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
        header.style.width = "100%"
        header.style.left = "0px"
        
        
    }
    else {
        header.style.width = "90%"
        header.style.left = "75px"
    }
    
    if (window.scrollY>0) {
        display();
        
        down.style.opacity="0";
    }
    else
    {
        hidden();
        down.style.opacity="1";
    }
    
    
})
down.addEventListener('click',scrolldown);



function display() {
    var cardscontant1 = ``;
    var cardscontant2 = ``;
    cardscontant1+= ` <h2>RECENT POSTS</h2>
                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types? </h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types?</h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types?</h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types?</h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types?</h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types?</h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                        <span class="tag">PROGRAMMING</span>
                    </section>
                    <section class="content">
                        <h4>What is Language Translator and its Types?</h4>
                        <div class="line-1">
                            <span> <i class="fa-solid fa-user"></i> TEQUILA</span>
                            <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="" class="btn1">READ MORE</a>
                    </section>
                </div>`;

                cardscontant2+= `<h2>POPULAR POSTS</h2>
                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                    </section>
                    <section class="content">
                        <a href="#">What is Language Translator and its Types? Differences between Compiler and
                            Interpreter</a>
                            <div class="line-1">
                                <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                            </div>
                        </section>
                    </div>
                    
                    <div class="card">
                        <section class="author">
                            <img src="imgs/01.webp" alt="">
                        </section>
                        <section class="content">
                            <a href="#">What is Language Translator and its Types? Differences between Compiler and
                                Interpreter</a>
                                <div class="line-1">
                                    <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                                </div>
                            </section>
                </div>

                <div class="card">
                    <section class="author">
                        <img src="imgs/01.webp" alt="">
                    </section>
                    <section class="content">
                        <a href="#">What is Language Translator and its Types? Differences between Compiler and
                            Interpreter</a>
                            <div class="line-1">
                                <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                            </div>
                        </section>
                    </div>
                    
                    <div class="card">
                        <section class="author">
                            <img src="imgs/01.webp" alt="">
                        </section>
                        <section class="content">
                            <a href="#">What is Language Translator and its Types? Differences between Compiler and
                                Interpreter</a>
                                <div class="line-1">
                                    <span> <i class="fa-solid fa-clock"></i> OCTOBER 15, 2021</span>
                                </div>
                            </section>
                        </div>
                    </div>
             </div>`;

    left.innerHTML = cardscontant1;
    right.innerHTML=cardscontant2;

}
function hidden(){

    left.innerHTML = ``;
    right.innerHTML=``;
}
function scrolldown(){
    display();
    window.scrollTo(0,450);
    
    
}
