import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Info, 
  Users, 
  Briefcase, 
  Calendar, 
  Palette, 
  Wrench, 
  Trophy, 
  CheckCircle, 
  FileText, 
  Bookmark, 
  Layers, 
  X, 
  Search, 
  MessageSquare,
  Award,
  BookMarked
} from "lucide-react";

import PhoneSimulator from "./components/PhoneSimulator";
import { 
  TreeIllustration, 
  MuseumIllustration, 
  MariePortrait, 
  TimPortrait, 
  JustinePortrait, 
  JSPortrait, 
  FantinePortrait, 
  AndyPortrait, 
  WildCatIllustration, 
  FlowersIllustration, 
  CubeIllustration, 
  MapIllustration, 
  ThankYouText, 
  DecorativeLine,
  HandArrow
} from "./components/SVGAssets";

import { 
  introText, 
  remerciementsText, 
  museumHistory, 
  museumMissions, 
  servicePublicationText, 
  teamMembers, 
  projectItems, 
  semainierData, 
  artisticChoices, 
  toolsData, 
  bonusItems, 
  evaluationText, 
  conclusionText, 
  glossaryEntries, 
  bibliographyEntries 
} from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 14;

  // Selected sub-states
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0);
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState("justine");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeDiaryMonth, setActiveDiaryMonth] = useState("Février");
  const [selectedDiaryDay, setSelectedDiaryDay] = useState<string | null>(null);
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [activeBonusIndex, setActiveBonusIndex] = useState(0);
  const [showCatBubble, setShowCatBubble] = useState(false);
  const [fontTesterClass, setFontTesterClass] = useState("font-serif");
  const [testerText, setTesterText] = useState("De la feuille d'arbre à la feuille de papier");

  // Swipe / Touch Navigation
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped Left -> Next page
      nextPage();
    } else if (diff < -50) {
      // Swiped Right -> Prev page
      prevPage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const jumpToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  // Safe sound representation or toggle popup
  const handleCatClick = () => {
    setShowCatBubble(true);
    setTimeout(() => {
      setShowCatBubble(false);
    }, 4000);
  };

  return (
    <PhoneSimulator>
      <div 
        id="app-container"
        className="w-full h-full flex flex-col justify-between bg-white text-neutral-900 select-none relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* TOP COMPACT TITLE BLOCK */}
        <div className="h-11 px-4 border-b border-neutral-100 flex items-center justify-between bg-white select-none z-30 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c84330]"></span>
            <span className="font-brush text-sm tracking-wider text-[#c84330] mt-0.5">MARIEMONT TFE</span>
          </div>
          {currentPage > 2 ? (
            <button
              id="back-to-sommaire"
              onClick={() => jumpToPage(2)}
              className="flex items-center space-x-1 px-2 py-0.5 rounded bg-[#c84330]/5 text-[#c84330] hover:bg-[#c84330]/10 border border-[#c84330]/15 transition-colors cursor-pointer active:scale-95 duration-100"
              title="Retour au Sommaire (Chapitres)"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider">Sommaire</span>
            </button>
          ) : (
            <div className="hidden" />
          )}
        </div>

        {/* CORE INTERACTIVE PAGE SLIDER */}
        <div className="flex-grow overflow-y-auto px-4 py-4 relative flex flex-col justify-between select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="w-full h-full flex flex-col select-none justify-between"
            >
              {/* PAGE 1: DECORATED BOOK COVER */}
              {currentPage === 1 && (
                <div id="page-cover" className="flex flex-col items-center justify-between text-center py-2 h-full">
                  <div className="w-full">
                    <p className="font-brush text-[11px] tracking-[0.2em] text-[#c84330] uppercase">
                      Stage en graphisme au
                    </p>
                    <h3 className="font-serif italic text-base text-neutral-800 -mt-1 font-semibold">
                      Musée royal de Mariemont
                    </h3>
                    <div className="w-10 h-0.5 bg-neutral-900 mx-auto mt-2"></div>
                  </div>

                  <div className="my-2 relative flex items-center justify-center">
                    <TreeIllustration size={230} />
                  </div>

                  <div className="w-full px-2">
                    <h4 className="text-[12px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-1">
                      De la feuille d'arbre à la
                    </h4>
                    <h1 className="font-serif text-[28px] font-bold leading-none tracking-tight text-neutral-900 uppercase">
                      Feuille de papier
                    </h1>
                    <div className="w-full max-w-[150px] mx-auto border-t-2 border-neutral-900 my-2.5"></div>
                    <p className="font-brush text-lg tracking-wider text-[#c84330]">
                      LOMBET TIM
                    </p>
                  </div>

                  <div className="w-full text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    <span>Travail de Fin d'Études · 2026</span>
                  </div>
                </div>
              )}

              {/* PAGE 2: TABLE OF CONTENTS (SOMMAIRE) */}
              {currentPage === 2 && (
                <div id="page-sommaire" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-3xl text-center text-[#c84330] mb-1">
                      Sommaire
                    </h2>
                    <DecorativeLine />
                    <p className="text-[11px] text-neutral-400 font-mono tracking-widest uppercase text-center mt-2 mb-4">
                      Appuyez sur un titre pour y accéder
                    </p>

                    <div className="space-y-2 px-1 max-h-[410px] overflow-y-auto no-scrollbar">
                      {[
                        { title: "Remerciements", page: 3, note: "page 07" },
                        { title: "Introduction & Le Bureau", page: 4, note: "page 08" },
                        { title: "Le Domaine de Mariemont", page: 5, note: "page 10" },
                        { title: "Le Service Publication", page: 6, note: "page 14" },
                        { title: "Portraits de l'Équipe", page: 7, note: "page 15" },
                        { title: "Projets Réalisés & Portfolios", page: 8, note: "page 24" },
                        { title: "Le Semainier (Calendrier)", page: 9, note: "page 36" },
                        { title: "Les Choix Artistiques", page: 10, note: "page 42" },
                        { title: "Outils de Conception", page: 11, note: "page 46" },
                        { title: "Moments Bonus de Stage", page: 12, note: "page 47" },
                        { title: "Autoévaluation de l'Intern", page: 13, note: "page 51" },
                        { title: "Conclusion, Lexique & Biblio", page: 14, note: "page 53" },
                      ].map((item, index) => (
                        <button
                          key={index}
                          onClick={() => jumpToPage(item.page)}
                          className="w-full flex items-center justify-between py-1 px-1.5 rounded-lg active:bg-neutral-50 transition-colors text-left group"
                        >
                          <div className="flex items-center space-x-1.5">
                            <span className="font-memo text-[10px] text-[#c84330] font-bold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="font-serif text-sm font-semibold text-neutral-800 group-hover:text-[#c84330] transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex-grow border-b border-dashed border-neutral-200 mx-2"></div>
                          <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
                            {item.note}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center space-x-3 mt-2 shrink-0">
                    <Info className="w-5 h-5 text-[#c84330] shrink-0" />
                    <p className="text-[10px] leading-relaxed text-neutral-500">
                      Ce livre compile <strong>15 semaines d'immersion</strong> de bachelier en Arts Appliqués, option Infographie.
                    </p>
                  </div>
                </div>
              )}

              {/* PAGE 3: REMERCIEMENTS */}
              {currentPage === 3 && (
                <div id="page-remerciements" className="flex flex-col h-full justify-between py-1">
                  <div>
                    <h2 className="font-brush text-3xl text-center text-[#c84330] mb-1">
                      Remerciements
                    </h2>
                    <DecorativeLine />
                  </div>

                  <div className="my-auto font-serif text-[13px] leading-relaxed text-neutral-700 italic space-y-4 px-2 py-4 border-l border-neutral-100 italic-quote shadow-inner rounded-r-lg max-h-[440px] overflow-y-auto no-scrollbar">
                    {remerciementsText.split("\n\n").map((para, i) => (
                      <p key={i} className="first-letter:text-xl first-letter:font-bold first-letter:text-[#c84330]">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center justify-end space-x-2 text-right p-2 border-t border-neutral-100 shrink-0">
                    <div>
                      <span className="font-brush text-sm text-[#c84330]">Tim Lombet</span>
                      <p className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase">
                        Stagiaire Graphiste Infographie · 2026
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 4: INTRODUCTION & LE CHAT */}
              {currentPage === 4 && (
                <div id="page-intro" className="flex flex-col h-full justify-between relative">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      L'Atelier
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Introduction au Stage
                    </p>
                    <DecorativeLine className="mb-2" />
                  </div>

                  {/* Main intro text content */}
                  <div className="flex-grow overflow-y-auto pr-1 no-scrollbar text-neutral-700 text-xs leading-relaxed space-y-3 px-1 my-2 max-h-[280px]">
                    {introText.split("\n\n").map((para, i) => (
                      <p key={i} className="font-sans font-normal first-letter:font-serif first-letter:text-2xl first-letter:float-left first-letter:mr-1.5 first-letter:text-[#c84330]">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* INTERACTIVE CAT ILLUSTRATION */}
                  <div className="border-t border-dashed border-neutral-200 pt-3 flex flex-col items-center shrink-0">
                    <div className="relative cursor-pointer" onClick={handleCatClick}>
                      <WildCatIllustration size={135} />
                      
                      {/* Interactive Whisper Bubble */}
                      <AnimatePresence>
                        {showCatBubble && (
                          <motion.div 
                            initial={{ scale: 0, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0, opacity: 0, y: 10 }}
                            className="absolute -top-10 -right-2 bg-neutral-900 text-white font-mono text-[9px] px-2.5 py-1.5 rounded-xl rounded-bl-none shadow-lg whitespace-nowrap z-50 pointer-events-none"
                          >
                            <span className="font-brush text-[#c84330] mr-1">Bonjour !</span> (Bonjour du chat sauvage)
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <p className="text-[9px] text-neutral-400 font-mono tracking-wider mt-1">
                      ▲ Appuyez sur le chat sauvage pour lui dire Bonjour
                    </p>
                  </div>
                </div>
              )}

              {/* PAGE 5: LE MUSÉE ROYAL DE MARIEMONT */}
              {currentPage === 5 && (
                <div id="page-musee" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Marie & Warocqué
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-[#c84330] uppercase mb-1">
                      Le Domaine & Son Histoire
                    </p>
                    <DecorativeLine />
                  </div>

                  {/* Interactive timeline slider */}
                  <div className="my-2 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100 flex flex-col shrink-0">
                    <div className="flex justify-between items-center bg-white rounded-lg border border-neutral-200/60 p-1 mb-2 space-x-1">
                      {["16e S.", "19e S.", "1934", "Roger B."].map((period, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveHistoryIndex(i)}
                          className={`flex-1 py-1 text-[9px] font-mono font-bold uppercase rounded transition-all ${
                            activeHistoryIndex === i 
                              ? "bg-[#c84330] text-white shadow-sm" 
                              : "text-neutral-500 hover:bg-neutral-100"
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>

                    {/* Timeline dynamic block content */}
                    <div className="min-h-[110px] overflow-y-auto no-scrollbar">
                      <h4 className="text-xs font-serif font-bold text-neutral-800 mb-1">
                        {museumHistory[activeHistoryIndex].title}
                      </h4>
                      <p className="text-[10px] leading-relaxed text-neutral-600 font-sans">
                        {museumHistory[activeHistoryIndex].content}
                      </p>
                    </div>
                  </div>

                  {/* Museum illustration sketch inside layout */}
                  <div className="flex items-center justify-center py-1">
                    {activeHistoryIndex === 0 ? <MariePortrait size={120} /> : <MuseumIllustration size={135} />}
                  </div>

                  {/* The 4 core missions */}
                  <div className="grid grid-cols-2 gap-1.5 shrink-0 pt-1 border-t border-neutral-100">
                    {museumMissions.map((mission, index) => (
                      <div key={index} className="p-1 px-2 bg-neutral-50 rounded border border-neutral-100">
                        <span className="text-[9px] font-bold uppercase text-[#c84330] font-mono leading-none block mb-0.5">
                          • {mission.name}
                        </span>
                        <p className="text-[8px] text-neutral-500 leading-tight">
                          {mission.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PAGE 6: LE SERVICE PUBLICATION */}
              {currentPage === 6 && (
                <div id="page-service-pub" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Les Publications
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Le Seuil Éditorial
                    </p>
                    <DecorativeLine />
                  </div>

                  <div className="my-auto font-serif text-[12.5px] leading-relaxed text-neutral-700 space-y-4 px-1 py-1 max-h-[360px] overflow-y-auto no-scrollbar">
                    {servicePublicationText.split("\n\n").map((para, i) => (
                      <p key={i}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex flex-col shrink-0">
                    <span className="text-[10px] font-bold font-mono uppercase text-[#c84330] mb-1">
                      Le cycle du graphiste au musée :
                    </span>
                    <div className="flex justify-between items-center text-[8px] font-mono text-neutral-500 select-none">
                      <div className="px-2 py-1 bg-white rounded border border-neutral-200">1. Demande</div>
                      <HandArrow size={14} className="mx-1" />
                      <div className="px-2 py-1 bg-white rounded border border-neutral-200">2. Cahier des charges</div>
                      <HandArrow size={14} className="mx-1" />
                      <div className="px-2 py-1 bg-white rounded border border-neutral-200">3. BAT</div>
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 7: INFOGRAPHIE ET L'ÉQUIPE (PORTRAITS INTERACTIFS) */}
              {currentPage === 7 && (
                <div id="page-equipe" className="flex flex-col h-full justify-between pb-1">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      La Team
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Portraits et Questions/Réponses
                    </p>
                    <DecorativeLine />

                    {/* Horizontal mini selectors of portraits */}
                    <div className="flex justify-between items-center space-x-1.5 my-2">
                      {teamMembers.map((member) => (
                        <button
                          key={member.id}
                          onClick={() => setSelectedTeamMemberId(member.id)}
                          className={`group relative flex-1 flex flex-col items-center p-1 rounded-xl border transition-all ${
                            selectedTeamMemberId === member.id 
                              ? "bg-[#c84330]/5 border-[#c84330] shadow-sm" 
                              : "bg-white border-neutral-200 hover:border-[#c84330]"
                          }`}
                        >
                          <div className="scale-75 origin-center">
                            {member.avatarId === "justine_portrait" && <JustinePortrait size={40} />}
                            {member.avatarId === "js_portrait" && <JSPortrait size={40} />}
                            {member.avatarId === "fantine_portrait" && <FantinePortrait size={40} />}
                            {member.avatarId === "andy_portrait" && <AndyPortrait size={40} />}
                          </div>
                          <span className="text-[8px] font-mono font-bold uppercase mt-1 leading-none text-neutral-800 text-center block max-w-full truncate">
                            {member.name.split(" ")[0]}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected interviewee detailed interview */}
                  {(() => {
                    const member = teamMembers.find(m => m.id === selectedTeamMemberId);
                    if (!member) return null;
                    return (
                      <div className="flex-grow flex flex-col justify-start bg-neutral-50/50 p-2.5 rounded-xl border border-neutral-200/50 overflow-hidden mb-1">
                        
                        {/* Member Bio Header */}
                        <div className="flex items-center space-x-2 border-b border-neutral-200/60 pb-1.5 mb-2 shrink-0">
                          <div className="w-8 h-8 border border-[#c84330] rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
                            {member.avatarId === "justine_portrait" && <JustinePortrait size={28} />}
                            {member.avatarId === "js_portrait" && <JSPortrait size={28} />}
                            {member.avatarId === "fantine_portrait" && <FantinePortrait size={28} />}
                            {member.avatarId === "andy_portrait" && <AndyPortrait size={28} />}
                          </div>
                          <div>
                            <h3 className="text-xs font-serif font-bold text-neutral-800 leading-tight">
                              {member.name}
                            </h3>
                            <span className="text-[8.5px] font-mono text-[#c84330] uppercase font-semibold block leading-none">
                              {member.role}
                            </span>
                          </div>
                        </div>

                        {/* Interview scrolling chat bubbles */}
                        <div className="flex-grow overflow-y-auto no-scrollbar space-y-2.5 pr-1 max-h-[295px]">
                          {member.interview.map((dialog, i) => (
                            <div key={i} className="flex flex-col space-y-1">
                              {/* Question Bubble */}
                              <div className="self-start max-w-[90%] bg-neutral-200 text-neutral-800 rounded-2xl rounded-tl-none px-2.5 py-1 text-[9px] leading-tight font-serif font-semibold">
                                {dialog.question}
                              </div>
                              {/* Answer Bubble */}
                              <div className="self-end max-w-[95%] bg-[#c84330]/5 text-neutral-700 border border-[#c84330]/20 rounded-2xl rounded-tr-none px-2.5 py-1 text-[9px] leading-relaxed font-sans whitespace-pre-line">
                                {dialog.answer}
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    );
                  })()}
                </div>
              )}

              {/* PAGE 8: PORTFOLIO DES PROJETS RÉALISÉS */}
              {currentPage === 8 && (
                <div id="page-projets" className="flex flex-col h-full justify-between relative">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Projets Réalisés
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Planches de Production · 15 Semaines
                    </p>
                    <DecorativeLine />
                  </div>

                  {/* Grid of the 9 projects */}
                  <div className="flex-grow grid grid-cols-3 gap-2 overflow-y-auto no-scrollbar my-2 max-h-[420px] select-none">
                    {projectItems.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setSelectedProjectId(project.id)}
                        className="group flex flex-col justify-between items-center text-center p-2 rounded-xl bg-white border border-neutral-200/80 active:border-[#c84330] hover:shadow-sm transition-all text-left"
                      >
                        {/* Custom visual vector stamp */}
                        <div className="flex-grow flex items-center justify-center py-1">
                          {project.illustrationId === "chateau_sketch" && <MuseumIllustration size={50} />}
                          {project.illustrationId === "mary_portrait" && <MariePortrait size={50} />}
                          {project.illustrationId === "cube_illustration" && <CubeIllustration size={45} />}
                          {project.illustrationId === "map_illustration" && <MapIllustration size={50} />}
                          {project.illustrationId === "tree_illustration" && <TreeIllustration size={50} />}
                          {project.illustrationId === "flowers_illustration" && <FlowersIllustration size={50} />}
                        </div>

                        {/* Title text */}
                        <div className="w-full">
                          <h4 className="text-[9px] font-serif font-bold text-neutral-800 leading-tight truncate group-hover:text-[#c84330]">
                            {project.title}
                          </h4>
                          <span className="text-[7.5px] font-mono uppercase tracking-wider text-neutral-400 leading-none truncate block">
                            {project.subtitle ? project.subtitle.substring(0, 14) : "Infographie"}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p className="text-[9px] text-neutral-400 font-mono tracking-wider text-center shrink-0">
                    ▲ Appuyez sur un projet pour voir l'analyse et le BAT
                  </p>

                  {/* Immersive overlay dialog for selected project */}
                  <AnimatePresence>
                    {selectedProjectId && (() => {
                      const item = projectItems.find(p => p.id === selectedProjectId);
                      if (!item) return null;
                      return (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 p-4 flex flex-col justify-between border-2 border-neutral-900 rounded-3xl"
                        >
                          {/* Overlay Header */}
                          <div className="flex justify-between items-start border-b border-neutral-100 pb-2 mb-2">
                            <div>
                              <h3 className="font-serif text-base font-bold text-neutral-900 leading-tight">
                                {item.title}
                              </h3>
                              <span className="text-[10px] font-mono text-[#c84330] uppercase font-semibold">
                                {item.subtitle || "PROJET DE STAGE"}
                              </span>
                            </div>
                            <button
                              onClick={() => setSelectedProjectId(null)}
                              className="p-1 rounded-full hover:bg-neutral-100 active:bg-neutral-200"
                            >
                              <X className="w-5 h-5 text-neutral-500" />
                            </button>
                          </div>

                          {/* Overlay Content */}
                          <div className="flex-grow overflow-y-auto no-scrollbar space-y-3 leading-relaxed pr-1 text-xs text-neutral-700">
                            {/* Illustration inside sheet detail */}
                            <div className="flex justify-center py-2 bg-neutral-50 rounded-xl border border-neutral-100">
                              {item.illustrationId === "chateau_sketch" && <MuseumIllustration size={110} />}
                              {item.illustrationId === "mary_portrait" && <MariePortrait size={100} />}
                              {item.illustrationId === "cube_illustration" && <CubeIllustration size={85} />}
                              {item.illustrationId === "map_illustration" && <MapIllustration size={100} />}
                              {item.illustrationId === "tree_illustration" && <TreeIllustration size={90} />}
                              {item.illustrationId === "flowers_illustration" && <FlowersIllustration size={100} />}
                            </div>

                            {item.context && (
                              <p className="bg-neutral-900 text-white font-mono text-[9.5px] px-2.5 py-1.5 rounded-lg">
                                <strong className="text-[#c84330] uppercase font-bold mr-1">Contexte :</strong> {item.context}
                              </p>
                            )}

                            <p className="font-serif italic whitespace-pre-line text-neutral-600 border-l-2 border-[#c84330] pl-2.5">
                              {item.content}
                            </p>

                            {item.lessons && (
                              <div className="bg-[#c84330]/5 border border-[#c84330]/20 p-2.5 rounded-xl">
                                <span className="text-[#c84330] font-bold font-mono text-[10px] uppercase block mb-1">
                                  ✓ Ce qu'il faut en retenir :
                                </span>
                                <p className="text-[10px] text-neutral-700 leading-normal font-sans">
                                  {item.lessons}
                                </p>
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => setSelectedProjectId(null)}
                            className="mt-3 w-full bg-neutral-900 text-white text-xs font-mono py-2.5 rounded-xl font-bold hover:bg-neutral-800 uppercase tracking-widest active:scale-95 transition-transform"
                          >
                            Retour au Portfolio
                          </button>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              )}

              {/* PAGE 9: LE SEMAINIER TIMELINE DIARY */}
              {currentPage === 9 && (
                <div id="page-semainier" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Semainier
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-[#c84330] uppercase mb-1">
                      Carnet de Bord Hebdomadaire
                    </p>
                    <DecorativeLine />
                  </div>

                  {/* Month selectors tab bar */}
                  <div className="flex bg-neutral-100 p-0.5 rounded-xl border border-neutral-200/50 space-x-0.5 shrink-0 my-2">
                    {semainierData.map((m) => (
                      <button
                        key={m.name}
                        onClick={() => {
                          setActiveDiaryMonth(m.name);
                          setSelectedDiaryDay(null);
                        }}
                        className={`flex-1 py-1 text-[10px] font-mono font-bold uppercase rounded-lg transition-all ${
                          activeDiaryMonth === m.name
                            ? "bg-white text-neutral-800 shadow"
                            : "text-neutral-500 hover:text-neutral-800"
                        }`}
                      >
                        {m.name}
                      </button>
                    ))}
                  </div>

                  {/* Diary list for active month */}
                  {(() => {
                    const month = semainierData.find(m => m.name === activeDiaryMonth);
                    if (!month) return null;
                    return (
                      <div className="flex-grow overflow-y-auto no-scrollbar border border-neutral-200 rounded-xl bg-white shadow-inner max-h-[300px]">
                        <div className="divide-y divide-neutral-100">
                          {month.entries.map((entry, index) => (
                            <div 
                              key={index} 
                              className={`flex items-start p-2 px-3 transition-colors ${
                                entry.isHighlight ? "bg-[#c84330]/5 text-neutral-900" : "text-neutral-700"
                              }`}
                            >
                              <div className="mr-3 font-mono text-xs font-bold shrink-0 mt-0.5">
                                <span className={`px-1.5 py-0.5 rounded ${
                                  entry.isHighlight ? "bg-[#c84330] text-white" : "bg-neutral-100 text-neutral-500"
                                }`}>
                                  {entry.day}
                                </span>
                              </div>
                              <div className="text-[10px] leading-relaxed font-sans">
                                {entry.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  <div className="mt-2 text-right text-[8px] font-mono text-neutral-400 uppercase tracking-widest shrink-0">
                    * Le rouge signale les jalons et réunions clés
                  </div>
                </div>
              )}

              {/* PAGE 10: LES CHOIX ARTISTIQUES */}
              {currentPage === 10 && (
                <div id="page-artistique" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Choix Artistiques
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Identité de l'Ouvrage
                    </p>
                    <DecorativeLine />
                  </div>

                  {/* Scrollable details of fonts & color & format */}
                  <div className="flex-grow overflow-y-auto prune-choices pr-1 no-scrollbar space-y-4 my-2 max-h-[290px]">
                    
                    {/* Character/Font tester utility */}
                    <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200/50">
                      <span className="text-[9px] font-bold font-mono uppercase text-[#c84330] tracking-wider block mb-2">
                        Simulateur Typographique :
                      </span>
                      
                      <div className="flex justify-between items-center bg-white rounded border border-neutral-200 p-0.5 mb-2 space-x-1">
                        {[
                          { label: "Flood Marker", font: "font-brush" },
                          { label: "Playfair Serif", font: "font-serif" },
                          { label: "Inter Neutral", font: "font-sans" },
                        ].map((item, i) => (
                          <button
                            key={i}
                            className={`flex-1 py-1 text-[8px] font-mono uppercase rounded transition-all ${
                              fontTesterClass === item.font ? "bg-[#c84330] text-white font-bold" : "text-neutral-500 hover:bg-neutral-100"
                            }`}
                            onClick={() => setFontTesterClass(item.font)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>

                      {/* Display Preview text */}
                      <div className="bg-white rounded border border-neutral-200 p-3 flex flex-col space-y-1 overflow-hidden">
                        <input
                          type="text"
                          value={testerText}
                          onChange={(e) => setTesterText(e.target.value)}
                          className="w-full text-[10px] font-mono border-b border-dashed border-neutral-200 pb-1 text-neutral-400 focus:outline-none mb-2"
                          placeholder="Écrivez pour tester la fonte..."
                        />
                        <p className={`${fontTesterClass} text-base text-neutral-800 tracking-wide text-center leading-snug truncate`}>
                          {testerText || "Bichromie"}
                        </p>
                      </div>
                    </div>

                    {artisticChoices.map((choice, i) => (
                      <div key={i} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <span className="text-[9.5px] font-bold uppercase text-[#c84330] font-mono tracking-wider block mb-1">
                          ↳ {choice.title}
                        </span>
                        <p className="text-[10px] leading-relaxed text-neutral-600 font-sans whitespace-pre-line">
                          {choice.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Compact Color Spectrum Visualizer */}
                  <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-md bg-[#c84330] border border-neutral-300"></div>
                      <span className="text-[9px] font-mono text-neutral-500">Rouge Mariemont (#C84330)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-md bg-neutral-900 border border-neutral-300"></div>
                      <span className="text-[9px] font-mono text-neutral-500">Noir Charbon (#1A1A1A)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 11: LES OUTILS */}
              {currentPage === 11 && (
                <div id="page-outils" className="flex flex-col h-full justify-between pb-1">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Les Outils
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Le Workspace du Stagiaire
                    </p>
                    <DecorativeLine />
                  </div>

                  {/* Tool detailed tab viewer */}
                  <div className="flex-grow flex flex-col justify-start bg-neutral-50 p-2.5 rounded-2xl border border-neutral-200/50 my-2 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5 mb-1.5 shrink-0">
                      <div>
                        <h3 className="font-serif text-sm font-bold text-neutral-800">
                          {toolsData[activeToolIndex].name}
                        </h3>
                        <span className="text-[9px] font-mono text-[#c84330] uppercase font-bold leading-none">
                          {toolsData[activeToolIndex].type}
                        </span>
                      </div>
                      <div className="px-2 py-1 bg-white rounded-lg border border-neutral-200 text-xs font-mono text-neutral-500 font-bold">
                        APP ADOBE
                      </div>
                    </div>

                    <div className="flex-grow overflow-y-auto no-scrollbar space-y-2 pr-1 text-[10px] leading-relaxed text-neutral-600 font-sans max-h-[240px]">
                      <p className="font-serif italic font-semibold text-neutral-800 text-[10.5px]">
                        {toolsData[activeToolIndex].description}
                      </p>
                      <p className="bg-white p-2 rounded-lg border border-neutral-100 text-[9.5px]">
                        <strong>Dans mon stage :</strong> {toolsData[activeToolIndex].details}
                      </p>
                    </div>
                  </div>

                  {/* Vertical list layout selectors of software */}
                  <div className="grid grid-cols-5 gap-1 shrink-0 select-none">
                    {toolsData.map((tool, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveToolIndex(index)}
                        className={`py-1.5 px-1 rounded-xl flex flex-col items-center justify-center border text-center transition-all ${
                          activeToolIndex === index 
                            ? "bg-[#c84330]/5 border-[#c84330] scale-105 shadow-sm" 
                            : "bg-white border-neutral-200 hover:border-[#c84330]/65"
                        }`}
                      >
                        <span className="text-[8px] font-mono font-extrabold uppercase text-neutral-800 tracking-wider">
                          {tool.name.split(" ")[1] || tool.name.split(" ")[0]}
                        </span>
                      </button>
                    ))}
                  </div>

                  <p className="text-[9px] text-neutral-400 font-mono tracking-wider text-center shrink-0 mt-1">
                    ▲ Appuyez sur un logiciel pour lire l'utilité métier
                  </p>
                </div>
              )}

              {/* PAGE 12: LES MOMENTS BONUS DU STAGE */}
              {currentPage === 12 && (
                <div id="page-bonus" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Moments Bonus
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Découvertes extra-scolaires
                    </p>
                    <DecorativeLine />
                  </div>

                  {/* Horizontal index buttons representing postcards */}
                  <div className="flex justify-between items-center space-x-1 my-1 shrink-0 bg-neutral-100 p-0.5 rounded-xl border border-neutral-200/50">
                    {bonusItems.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveBonusIndex(index)}
                        className={`flex-1 py-1 text-[8.5px] font-mono uppercase rounded-lg transition-all ${
                          activeBonusIndex === index
                            ? "bg-white text-[#c84330] font-bold shadow"
                            : "text-neutral-500 hover:text-neutral-800"
                        }`}
                      >
                        Note {String(index + 1).padStart(2, "0")}
                      </button>
                    ))}
                  </div>

                  {/* Active polaroid styled content card */}
                  {(() => {
                    const bonus = bonusItems[activeBonusIndex];
                    return (
                      <div className="flex-grow flex flex-col justify-between bg-white border-2 border-neutral-900 rounded-3xl p-3 my-2 shadow-[4px_4px_0px_0px_rgba(200,67,48,1)] overflow-hidden">
                        <div className="shrink-0 flex justify-between items-start border-b border-dashed border-neutral-200 pb-1 mb-1 bg-neutral-50/50 p-2 rounded-xl">
                          <div>
                            <span className="text-[9px] font-bold text-[#c84330] font-mono uppercase tracking-wider block">
                              ★ EXPÉRIENCE {String(activeBonusIndex + 1).padStart(2, "0")}
                            </span>
                            <h3 className="font-serif text-xs font-extrabold text-neutral-800 leading-tight">
                              {bonus.title}
                            </h3>
                          </div>
                          {bonus.subtitle && (
                            <span className="text-[7.5px] font-mono bg-neutral-900 text-white rounded px-1.5 py-0.5 rotate-3 hover:rotate-0 transition-transform">
                              {bonus.subtitle}
                            </span>
                          )}
                        </div>

                        {/* Story scrolls */}
                        <div className="flex-grow overflow-y-auto pr-1 no-scrollbar text-[10px] leading-relaxed text-neutral-600 font-sans max-h-[160px]">
                          {/* Sketch trigger representation */}
                          {bonus.id === "shooting-art" && (
                            <div className="flex justify-center my-1.5 bg-neutral-50 rounded-lg p-1.5 border border-dashed border-neutral-200">
                              <CubeIllustration size={50} />
                            </div>
                          )}
                          <p className="whitespace-pre-line">
                            {bonus.content}
                          </p>
                        </div>

                        {bonus.lesson && (
                          <div className="shrink-0 bg-[#c84330]/5 border-t border-[#c84330]/20 pt-1.5 mt-1">
                            <span className="text-[9px] font-bold font-mono text-[#c84330] uppercase block">
                              ↳ Leçon acquise :
                            </span>
                            <p className="text-[9.5px] text-neutral-700 font-serif italic leading-snug">
                              {bonus.lesson}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  <p className="text-[9px] text-neutral-400 font-mono tracking-wider text-center shrink-0">
                    ▲ Appuyez sur Notes pour découvrir les anecdotes de régie
                  </p>
                </div>
              )}

              {/* PAGE 13: AUTOÉVALUATION DE L'INTERN TIM */}
              {currentPage === 13 && (
                <div id="page-evaluation" className="flex flex-col h-full justify-between">
                  <div>
                    <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                      Autoévaluation
                    </h2>
                    <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                      Bilan & Confiance Métier
                    </p>
                    <DecorativeLine />
                  </div>

                  <div className="flex-grow overflow-y-auto pr-1 my-2 no-scrollbar text-neutral-750 text-xs leading-relaxed space-y-3 px-1 max-h-[290px] font-sans">
                    {evaluationText.split("\n\n").map((para, i) => (
                      <p key={i}>
                        {para.startsWith("RECEVOIR") || para.startsWith("DÉCOUPER") ? (
                          <strong className="text-[#c84330] uppercase font-mono text-[9px] tracking-wider block mt-2 mb-0.5">
                            {para}
                          </strong>
                        ) : (
                          para
                        )}
                      </p>
                    ))}
                  </div>

                  {/* Draw small signature stamp */}
                  <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-between shrink-0 font-mono select-none text-[9px]">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full border border-neutral-300 bg-white p-0.5 overflow-hidden flex items-center justify-center">
                        <TimPortrait size={30} />
                      </div>
                      <div>
                        <strong className="text-neutral-800 font-bold block leading-none">Tim Lombet</strong>
                        <span className="text-neutral-400">Infographiste Certifié</span>
                      </div>
                    </div>
                    <div className="text-[#c84330] font-brush text-sm rotate-[-4deg]">
                      Félicitations ✓
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 14: CONCLUSION, ANNEXES & 1000 MERCIS */}
              {currentPage === 14 && (
                <div id="page-annexes" className="flex flex-col h-full justify-between overflow-hidden">
                  
                  {/* Miniature sub-tab selector inside Annexes (to handle Glossaire / Bibliographie / Conclusion organically within phone boundaries) */}
                  <div className="h-full flex flex-col justify-between overflow-hidden">
                    
                    {/* Compact Section Header */}
                    <div>
                      <h2 className="font-brush text-2xl text-center text-[#c84330] mb-0.5">
                        Annexes
                      </h2>
                      <p className="text-[10px] text-center font-mono tracking-widest text-neutral-400 uppercase mb-1">
                        Lexique, Sources & Clôture
                      </p>
                      <DecorativeLine />
                    </div>

                    {/* Compact scroll area displaying conclusion, glossaire and bibliography altogether */}
                    <div className="flex-grow overflow-y-auto no-scrollbar my-2 space-y-4 max-h-[350px]">
                      
                      {/* 1. Conclusion text */}
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100/80">
                        <span className="text-[10px] font-bold font-mono uppercase text-[#c84330] block mb-2">
                          Conclusion Générale :
                        </span>
                        <div className="text-[10.5px] leading-relaxed text-neutral-600 font-sans space-y-2 whitespace-pre-line italic">
                          {conclusionText}
                        </div>
                      </div>

                      {/* 2. Interactive Glossary */}
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <span className="text-[10px] font-bold font-mono uppercase text-[#c84330] block mb-2">
                          Glossaire Éditorial :
                        </span>
                        <div className="space-y-2 text-[10px] leading-normal text-neutral-600">
                          {glossaryEntries.map((item, id) => (
                            <p key={id}>
                              <strong className="text-neutral-800 font-bold font-mono uppercase">{item.term} :</strong> {item.definition}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* 3. Bibliography list */}
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <span className="text-[10px] font-bold font-mono uppercase text-[#c84330] block mb-2">
                          Bibliographie :
                        </span>
                        <div className="space-y-2 text-[9px] text-neutral-500 font-mono leading-tight">
                          {bibliographyEntries.map((item, id) => (
                            <p key={id}>
                              <span className="text-neutral-700 font-bold block">{item.author} · <em>{item.title}</em></span>
                              {item.details}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* 4. Colophon card and final 1000 MERCIS signature */}
                      <div className="p-3 bg-neutral-900 text-neutral-200 rounded-xl border border-neutral-800 text-center flex flex-col items-center">
                        <ThankYouText />
                        
                        <div className="w-10 h-0.5 bg-[#c84330] my-2"></div>
                        
                        <p className="text-[8px] font-mono text-neutral-400 leading-normal uppercase">
                          Mise en Page : Lombet Tim<br/>
                          Promotrice : Julie Scouflaire<br/>
                          Maître de stage : Justine Periaux<br/>
                          École : HEPH Condorcet<br/>
                          Impression : Pixartprinting
                        </p>
                      </div>

                    </div>

                    <div className="text-center text-[7.5px] font-mono text-neutral-400 uppercase tracking-widest shrink-0 mt-1">
                      © TIM LOMBET · TOUS DROITS RÉSERVÉS · 2026
                    </div>

                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM INTERACTIVE NAVIGATION BAR */}
        <div className="h-16 px-4 border-t border-neutral-100 flex items-center justify-between bg-neutral-50 shrink-0 select-none z-30">
          
          {/* Navigation indicator button (Chevron Left) */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              currentPage === 1
                ? "border-neutral-150 text-neutral-300 pointer-events-none"
                : "border-neutral-200 text-neutral-800 bg-white hover:border-[#c84330] active:scale-90"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Elegant Page progress dots / number dialer */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-neutral-800">
              Page {String(currentPage).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
            </span>
            
            {/* Linear scroll progress bar indicator */}
            <div className="h-1 w-28 bg-neutral-200 rounded-full mt-1.5 overflow-hidden">
              <div 
                className="h-full bg-[#c84330] transition-all duration-300"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation indicator button (Chevron Right) */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              currentPage === totalPages
                ? "border-neutral-150 text-neutral-300 pointer-events-none"
                : "border-neutral-200 text-neutral-800 bg-white hover:border-[#c84330] active:scale-90"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </PhoneSimulator>
  );
}
