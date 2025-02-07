import { useState } from "react";
import language from "../data/languageData";

export default function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (id) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div>
        <h1 className="text-center text-5xl mt-[35px]">PASTICCERIA - 138 -</h1>
        <div className="container mx-auto text-lg">
          <p className="text-center mt-[35px] ">
            Benvenuti da Pasticceria 138, dove la dolcezza incontra
            l'innovazione! 🍰✨
          </p>
          <div className="flex justify-center items-center text-center mt-[17px]">
            <img
              className="w-260 h-150 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              src="./img/INTERNI_138.png"
              alt="Interno pasticceria"
            />
          </div>
          <p className="text-center mt-[35px]">
            Nel nostro laboratorio artigianale creiamo ogni giorno torte,
            pasticcini e dessert dal gusto unico, combinando tradizione e
            creatività. Il numero 138 rappresenta il nostro impegno costante nel
            perfezionare ogni ricetta, proprio come un codice ben scritto in un
            programma: preciso, armonioso e senza errori. E a proposito di
            codice, dietro il bancone non c'è solo farina e zucchero, ma anche
            una passione per la programmazione web! Grazie al corso Boolean, ci
            siamo immersi nel mondo dello sviluppo web, apprendendo le basi di
            HTML, CSS, JavaScript e molto altro. Questo ci ha permesso di
            portare la nostra pasticceria anche online, creando un sito dinamico
            e interattivo dove puoi esplorare il nostro menu, ordinare dolci
            personalizzati e scoprire le ultime novità. Pasticceria 138 è il
            perfetto connubio tra tradizione e tecnologia: che tu stia cercando
            un dolce squisito o un'ispirazione per il tuo prossimo progetto
            digitale, sei nel posto giusto! Visita il nostro sito e lasciati
            conquistare dal gusto… e dal codice!
          </p>
          <div className="container">
            <p className="text-center">
              Ma non ci siamo fermati qui! Per rendere la nostra esperienza
              online ancora più dinamica e coinvolgente, abbiamo esplorato
              strumenti e tecnologie avanzate come HTML, CSS, JavaScript, Vite,
              React ed Express.
            </p>
            {language.map((elm) => (
              <div key={elm.id}>
                <div className="container-language flex justify-center items-center gap-4 mt-[35px]">
                  <h3 className="font-semibold">{elm.title}</h3>
                  <button className="btn text-xl" onClick={() => toggle(elm.id)}>
                    {isOpen === elm.id ? "-" : "+"}
                  </button>
                </div>
                {isOpen === elm.id && (
                  <p className="text-center mt-[15px]">{elm.description}</p>
                )}
              </div>
            ))}
            <p className="text-center mt-[35px] mb-[35px]">
              Sei pronto a scoprire il nostro mondo di sapori e innovazione?
              🍰💻✨
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
