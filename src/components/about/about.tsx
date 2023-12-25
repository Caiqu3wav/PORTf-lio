import './about.css';
import { MdAttachEmail } from "react-icons/md";

function About(){
    return(
      <section className="about-section">
    <h1 className="text-3xl font-bold">Mais sobre mim</h1>
    <div className="flex">
      <div className="flex flex-col items-center w-[300px] h-[400px] bg-opaco-black border-l-blue-400
       border-t-blue-400 border-solid border-2 rounded-tl-[100px] rounded-br-[100px]">
            <img className="rounded-xl w-[120px] mt-6" src="src\assets\caique_anime\Caique-character16(producing).png" alt="" />
            <h1 className="font-bold">Caique</h1>
            <h2>Desenvolvedor full-stack</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
              <MdAttachEmail color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p>asapcaique@gmail.com</p>
              </div>
              <div className="flex gap-3">
              <MdAttachEmail color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p>Brasil</p>
              </div>
              <div className="flex gap-3">
              <MdAttachEmail color="rgba(39, 245, 238, 0.8)" className="mt-2" /><p>Full-time/Freelancer</p>
              </div>
              <div className="flex gap-3">
              <MdAttachEmail color="rgba(39, 245, 238, 0.8)" className="mt-2" /><a className="text-white underline underline-offset-4" href="">(12) 997364432</a>
              </div>
              </div>
       </div>
    </div>
      </section>
    );
}

export default About;