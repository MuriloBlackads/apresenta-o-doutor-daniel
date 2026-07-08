import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Calendar, 
  Video, 
  CheckCircle2, 
  ShieldCheck,
  TrendingUp,
  Award,
  Play
} from 'lucide-react';

const slides = [
  {
    id: 'slide-1',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="framer-badge mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Estratégia de Posicionamento
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mb-6"
        >
          Transformamos um evento em <span className="text-brand-600">autoridade médica</span> na sua cidade.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12"
        >
          Um sistema estratégico de conteúdo para atrair, engajar e posicionar você como a principal referência em sua especialidade.
        </motion.p>
      </div>
    )
  },
  {
    id: 'slide-2',
    content: (
      <div className="flex flex-col md:flex-row h-full w-full px-6 md:px-20 items-center justify-center max-w-7xl mx-auto gap-12">
        <div className="w-full md:w-1/2">
          <div className="framer-badge mb-6">
            <Calendar className="w-4 h-4" />
            Fase 01 • Mês 01
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Construção de Autoridade
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-8">
            O primeiro passo é elevar a percepção de valor. Vamos produzir 4 vídeos estratégicos focados em educar o público e posicionar você como a principal referência.
          </p>
          <div className="inline-block framer-card framer-shadow p-6 border-brand-100 bg-brand-50/50">
            <p className="text-sm text-brand-600 font-bold uppercase tracking-wider mb-1">Investimento Mês 01</p>
            <p className="text-4xl font-extrabold text-slate-900">R$ 1.400</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-4"
        >
          {[
            { title: "Vídeo de Posicionamento", desc: "Sua história, missão e diferenciais de atendimento." },
            { title: "Conscientização do Problema", desc: "Focando nas principais dores e sintomas do paciente." },
            { title: "Quebra de Objeções", desc: "Desmistificando medos comuns da sua especialidade." },
            { title: "Antecipação do Evento", desc: "Plantando a semente e gerando curiosidade do que está por vir." }
          ].map((item, i) => (
            <div key={i} className="framer-card p-5 flex gap-4 items-start hover:border-brand-200 transition-colors">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-medium text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    )
  },
  {
    id: 'slide-3',
    content: (
      <div className="flex flex-col md:flex-row h-full w-full px-6 md:px-20 items-center justify-center max-w-7xl mx-auto gap-12">
        <div className="w-full md:w-1/2">
          <div className="framer-badge mb-6">
            <TrendingUp className="w-4 h-4" />
            Fase 01 • Mês 02
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Aquecimento e Conversão
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-8">
            Com a autoridade estabelecida, aumentamos a intensidade. São 5 vídeos focados em gerar desejo, urgência e garantir a presença do público no evento.
          </p>
          <div className="inline-block framer-card framer-shadow p-6 border-brand-100 bg-brand-50/50">
            <p className="text-sm text-brand-600 font-bold uppercase tracking-wider mb-1">Investimento Mês 02</p>
            <p className="text-4xl font-extrabold text-slate-900">R$ 1.750</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-3"
        >
          {[
            { title: "Aprofundamento Técnico", desc: "Demonstrando expertise em um tema específico." },
            { title: "Prova Social", desc: "Casos de sucesso e transformação de pacientes." },
            { title: "Interação e Dúvidas", desc: "Respondendo as perguntas mais frequentes da audiência." },
            { title: "Gatilho de Urgência", desc: "Aviso de vagas limitadas ou proximidade da data." },
            { title: "Chamada Final (CTA)", desc: "Convite direto, claro e irresistível para o evento." }
          ].map((item, i) => (
            <div key={i} className="framer-card p-4 flex gap-4 items-start hover:border-brand-200 transition-colors">
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Play className="w-3 h-3 ml-0.5" fill="currentColor" />
              </div>
              <div>
                <h4 className="text-md font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-medium text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    )
  },
  {
    id: 'slide-4',
    content: (
      <div className="flex flex-col md:flex-row h-full w-full px-6 md:px-20 items-center justify-center max-w-7xl mx-auto gap-12">
        <div className="w-full md:w-1/2">
          <div className="framer-badge mb-6">
            <Award className="w-4 h-4" />
            Fase 02
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            O Evento
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-8">
            Capturar autoridade, prova social e conteúdo de alto valor durante a execução do seu evento.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0" />
              <p className="text-slate-700 font-semibold text-lg">Captação completa do evento</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0" />
              <p className="text-slate-700 font-semibold text-lg">Bastidores e momentos-chave</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0" />
              <p className="text-slate-700 font-semibold text-lg">Geração de prova social</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full md:w-1/2"
        >
          <div className="framer-card framer-shadow p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-500"></div>
            <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-4">Investimento do Evento</p>
            
            <div className="flex flex-col items-center justify-center gap-2 mb-6">
              <p className="text-xl text-slate-400 font-semibold line-through decoration-2">R$ 1.000</p>
              <p className="text-6xl font-extrabold text-slate-900 tracking-tight">R$ 350</p>
            </div>
            
            <div className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-brand-50 text-brand-600 font-bold text-lg">
              Valor Aplicado no Pacote
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'slide-5',
    content: (
      <div className="flex flex-col h-full w-full px-6 md:px-20 justify-center max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="framer-badge mb-6">
            <TrendingUp className="w-4 h-4" />
            Resumo
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Investimento Total
          </h2>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="framer-card framer-shadow p-6 md:p-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hidden md:flex">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Pré-evento (Mês 01 + Mês 02)</h3>
                <p className="text-slate-500 font-medium">2 meses de estratégia de conteúdo (9 vídeos)</p>
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900">R$ 3.150</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="framer-card framer-shadow p-6 md:p-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hidden md:flex">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Evento</h3>
                <p className="text-slate-500 font-medium">Captação e cobertura completa</p>
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900">R$ 350</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="framer-card framer-shadow p-6 md:p-8 flex items-center justify-between bg-brand-600 text-white border-none mt-4"
          >
            <h3 className="text-2xl font-bold">Total do Projeto</h3>
            <p className="text-4xl font-extrabold">R$ 3.500</p>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 'slide-6',
    content: (
      <div className="flex flex-col h-full w-full px-6 md:px-20 justify-center max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="framer-card framer-shadow p-12 md:p-20 bg-slate-900 text-white border-none relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-400 rounded-full blur-[100px] opacity-30"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              Condição Especial
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-16">
              Uma parceria estratégica para o seu crescimento.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-400 font-medium mb-2">Valor Real</p>
                <p className="text-3xl font-bold line-through text-slate-500">R$ 4.150</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-400 font-medium mb-2">Diferença</p>
                <p className="text-3xl font-bold text-brand-400">R$ 650</p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-600 border border-brand-500 shadow-lg shadow-brand-500/20">
                <p className="text-brand-100 font-medium mb-2">Valor Final</p>
                <p className="text-4xl font-extrabold text-white">R$ 3.500</p>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto italic">
              "Isso não é desconto. É uma parceria estratégica para crescimento e posicionamento."
            </p>
          </div>
        </motion.div>
      </div>
    )
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-50 flex flex-col">
      
      {/* Header / Navbar (Medicana Style) */}
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20">
            D
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">Dr. Daniel</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold text-slate-600">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-400">{String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </header>

      {/* Main Slide Content */}
      <div className="relative flex-1 w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white p-2 rounded-full framer-shadow border border-slate-100">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentSlide === 0 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-95'
          }`}
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        
        <div className="w-px h-6 bg-slate-200"></div>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentSlide === slides.length - 1 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'text-brand-600 hover:bg-brand-50 active:scale-95'
          }`}
        >
          <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
