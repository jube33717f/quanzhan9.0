
// const API_URL = 'http://127.0.0.1:5000';

initHome();
function initHome(){
    // const apiUrl = api;
    const role = document.querySelector(".pf_card-fp-others-p");
    console.log(role);
    let int = 0;
    role.onmouseover = function(){
        // setTimeout(int,1000);
        setTimeout(x,300);
        function x(){
            if(role.textContent === "Web Designer"){
                role.textContent = "Frontend-developer";
            }else{
                role.textContent = "Web Designer";
            }
            int = setInterval(function(){


                if(role.textContent === "Web Designer"){
                    role.textContent = "Frontend-developer";
                }else{
                    role.textContent = "Web Designer";
                }
                role.onmouseout = function(){


                    clearInterval(int);
                    role.textContent = "Web Designer";
                }
            },1500);

        }


    }
    role.onmouseout = function(){


        clearInterval(int);
        role.textContent = "Web Designer";
    }



    //menu here
    const m_hm = document.querySelector(".menu-home");
    const m_rs = document.querySelector(".menu-resume");
    const m_sv = document.querySelector(".menu-services");
    const m_bg = document.querySelector(".menu-blog");
    const m_ct = document.querySelector(".menu-contact");

    const p_hm = document.querySelector(".pf_card");
    const p_rs = document.querySelector(".pf_resume");
    const p_sv = document.querySelector(".pf_services");
    const p_bg = document.querySelector(".pf_blog");
    const p_ct = document.querySelector(".pf_contact");

    m_hm.addEventListener('click', f_hm);
    function f_hm(){
        p_hm.style.display = "block";
        p_rs.style.display = "none";
        p_bg.style.display = "none";
        p_ct.style.display = "none";
        p_sv.style.display = "none";

        m_hm.style.color = "#86858A";
        m_rs.style.color = "#BBBABB";
        m_sv.style.color = "#BBBABB";
        m_bg.style.color = "#BBBABB";
        m_ct.style.color = "#BBBABB";

    }

    m_rs.addEventListener('click', f_rs);
    function f_rs(){
        p_hm.style.display = "none";
        p_rs.style.display = "block";
        m_rs.style.color = "#86858A";
        p_bg.style.display = "none";
        p_ct.style.display = "none";
        p_sv.style.display = "none";

        m_hm.style.color = "#BBBABB";
        m_sv.style.color = "#BBBABB";
        m_bg.style.color = "#BBBABB";
        m_ct.style.color = "#BBBABB";
    }

    m_sv.addEventListener('click', f_sv);
    function f_sv(){
        p_hm.style.display = "none";
        p_rs.style.display = "none";
        p_bg.style.display = "none";
        p_ct.style.display = "none";
        p_sv.style.display = "block";
        m_sv.style.color = "#86858A";

        m_hm.style.color = "#BBBABB";
        m_rs.style.color = "#BBBABB";
        m_bg.style.color = "#BBBABB";
        m_ct.style.color = "#BBBABB";

    }

    m_bg.addEventListener('click', f_bg);
    function f_bg(){
        p_hm.style.display = "none";
        p_rs.style.display = "none";
        p_bg.style.display = "block";
        p_ct.style.display = "none";
        p_sv.style.display = "none";
        m_bg.style.color = "#86858A";

        m_hm.style.color = "#BBBABB";
        m_rs.style.color = "#BBBABB";
        m_sv.style.color = "#BBBABB";
        m_ct.style.color = "#BBBABB";
    }

    m_ct.addEventListener('click', f_ct);
    function f_ct(){
        p_hm.style.display = "none";
        p_rs.style.display = "none";
        p_bg.style.display = "none";
        p_ct.style.display = "block";
        p_sv.style.display = "none";
        m_ct.style.color = "#86858A";

        m_hm.style.color = "#BBBABB";
        m_rs.style.color = "#BBBABB";
        m_sv.style.color = "#BBBABB";
        m_bg.style.color = "#BBBABB";

    }


}