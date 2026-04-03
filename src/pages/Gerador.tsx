import React, { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { Download, Upload, Type, Palette, ArrowLeft, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const TEMPLATES = [
  {
    id: "clean-top",
    name: "Destaque Superior",
    render: (title: string, subtitle: string, image: string | null, logo: string | null) => (
      <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
        {/* Top accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#0e8a7b] to-[#5bc4a8]" />
        {/* Image area */}
        <div className="flex-1 relative bg-[#f8fafa] flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-3 text-[#b0c4c0]">
              <ImageIcon size={64} strokeWidth={1} />
              <span className="text-sm font-medium">Adicione uma imagem</span>
            </div>
          )}
        </div>
        {/* Bottom text area */}
        <div className="p-8 pb-6 bg-white">
          <h2
            className="text-2xl font-bold leading-tight text-[#1a2332] mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title || "Seu título aqui"}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#64748b] leading-relaxed">{subtitle}</p>
          )}
          <div className="mt-4 flex items-center justify-between">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#0e8a7b] to-[#5bc4a8]" />
            {logo ? (
              <img src={logo} alt="Logo" className="h-8 object-contain" />
            ) : (
              <span className="text-xs font-bold tracking-widest text-[#0e8a7b] uppercase">SUA MARCA</span>
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "centered",
    name: "Centralizado",
    render: (title: string, subtitle: string, image: string | null, logo: string | null) => (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#0e8a7b] rounded-tl-lg" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#0e8a7b] rounded-br-lg" />
        {/* Content */}
        <div className="flex flex-col items-center text-center px-12 gap-6">
          {image ? (
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#0e8a7b]/20">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-48 h-48 rounded-full bg-[#f0faf8] flex items-center justify-center border-4 border-[#0e8a7b]/10">
              <ImageIcon size={48} className="text-[#b0c4c0]" strokeWidth={1} />
            </div>
          )}
          <h2
            className="text-3xl font-extrabold leading-tight text-[#1a2332]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title || "Seu título aqui"}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#64748b] max-w-[280px]">{subtitle}</p>
          )}
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0e8a7b] to-[#5bc4a8]" />
          {logo ? (
            <img src={logo} alt="Logo" className="h-8 object-contain mt-2" />
          ) : (
            <span className="text-xs font-bold tracking-widest text-[#0e8a7b] uppercase mt-2">SUA MARCA</span>
          )}
        </div>
      </div>
    ),
  },
  {
    id: "split",
    name: "Dividido",
    render: (title: string, subtitle: string, image: string | null, logo: string | null) => (
      <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
        {/* Top half - image */}
        <div className="h-[55%] relative bg-[#f0faf8] overflow-hidden">
          {image ? (
            <img src={image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon size={64} className="text-[#b0c4c0]" strokeWidth={1} />
            </div>
          )}
          {/* Diagonal overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </div>
        {/* Bottom half - text */}
        <div className="flex-1 px-8 pb-6 flex flex-col justify-center">
          <div className="w-10 h-1 rounded-full bg-[#0e8a7b] mb-4" />
          <h2
            className="text-2xl font-bold leading-tight text-[#1a2332] mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title || "Seu título aqui"}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#64748b] leading-relaxed">{subtitle}</p>
          )}
          <div className="mt-auto pt-4 flex items-center justify-end">
            {logo ? (
              <img src={logo} alt="Logo" className="h-7 object-contain" />
            ) : (
              <span className="text-xs font-bold tracking-widest text-[#0e8a7b] uppercase">SUA MARCA</span>
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "bold-text",
    name: "Texto Bold",
    render: (title: string, subtitle: string, image: string | null, logo: string | null) => (
      <div className="w-full h-full bg-[#0e8a7b] flex flex-col relative overflow-hidden">
        {/* Pattern grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="flex-1 flex flex-col justify-center px-10 relative z-10">
          <h2
            className="text-4xl font-extrabold leading-tight text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title || "Seu título aqui"}
          </h2>
          {subtitle && (
            <p className="text-base text-white/80 leading-relaxed max-w-[300px]">{subtitle}</p>
          )}
        </div>
        {/* Bottom area */}
        <div className="px-10 pb-8 flex items-end justify-between relative z-10">
          {image ? (
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/30">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-xl bg-white/10 border-2 border-white/20" />
          )}
          {logo ? (
            <img src={logo} alt="Logo" className="h-8 object-contain brightness-0 invert" />
          ) : (
            <span className="text-xs font-bold tracking-widest text-white/90 uppercase">SUA MARCA</span>
          )}
        </div>
      </div>
    ),
  },
  {
    id: "minimal",
    name: "Minimalista",
    render: (title: string, subtitle: string, image: string | null, logo: string | null) => (
      <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center px-12 text-center">
          {logo ? (
            <img src={logo} alt="Logo" className="h-8 object-contain mb-8 opacity-40" />
          ) : (
            <div className="h-8 mb-8" />
          )}
          <div className="w-12 h-[2px] bg-[#0e8a7b] mb-6" />
          <h2
            className="text-2xl font-semibold leading-relaxed text-[#1a2332] tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title || "Seu título aqui"}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#94a3b8] mt-4 max-w-[260px] leading-relaxed">{subtitle}</p>
          )}
          <div className="w-12 h-[2px] bg-[#0e8a7b] mt-6" />
        </div>
        {image && (
          <div className="h-[35%] overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    ),
  },
  {
    id: "card-style",
    name: "Card Elegante",
    render: (title: string, subtitle: string, image: string | null, logo: string | null) => (
      <div className="w-full h-full bg-[#f8fafa] flex items-center justify-center relative overflow-hidden p-8">
        {/* Inner card */}
        <div className="bg-white rounded-2xl shadow-xl w-full h-full flex flex-col overflow-hidden">
          {/* Image */}
          <div className="h-[50%] relative overflow-hidden bg-[#e8f5f2]">
            {image ? (
              <img src={image} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon size={48} className="text-[#b0c4c0]" strokeWidth={1} />
              </div>
            )}
          </div>
          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#0e8a7b]" />
              <div className="w-2 h-2 rounded-full bg-[#0e8a7b]/50" />
              <div className="w-2 h-2 rounded-full bg-[#0e8a7b]/20" />
            </div>
            <h2
              className="text-xl font-bold leading-tight text-[#1a2332] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {title || "Seu título aqui"}
            </h2>
            {subtitle && (
              <p className="text-xs text-[#64748b] leading-relaxed">{subtitle}</p>
            )}
            <div className="mt-auto pt-3 flex justify-end">
              {logo ? (
                <img src={logo} alt="Logo" className="h-6 object-contain" />
              ) : (
                <span className="text-[10px] font-bold tracking-widest text-[#0e8a7b] uppercase">SUA MARCA</span>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const Gerador = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>, setter: (v: string | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setter(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDownload = useCallback(async () => {
    if (!canvasRef.current) return;
    setDownloading(true);
    try {
      const refWidth = 432;
      const refHeight = 540;
      const scaleFactor = 1080 / refWidth; // 2.5
      const canvas = await html2canvas(canvasRef.current, {
        width: refWidth,
        height: refHeight,
        scale: scaleFactor,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = `post-instagram-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
    }
    setDownloading(false);
  }, []);

  const template = TEMPLATES[selectedTemplate];

  return (
    <div className="min-h-screen bg-[#f4f7f6]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-[#64748b] hover:text-[#0e8a7b] transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-[#1a2332]">Gerador de Posts</h1>
              <p className="text-xs text-[#94a3b8]">Instagram • 1080 × 1350 px</p>
            </div>
          </div>
          <Button
            onClick={handleDownload}
            disabled={downloading}
            className="bg-[#0e8a7b] hover:bg-[#0c7a6c] text-white gap-2 rounded-lg"
          >
            <Download size={16} />
            {downloading ? "Gerando..." : "Baixar PNG"}
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Controls */}
          <div className="w-full lg:w-80 space-y-6 order-2 lg:order-1">
            {/* Template selector */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0]">
              <h3 className="text-sm font-semibold text-[#1a2332] mb-3 flex items-center gap-2">
                <Palette size={16} className="text-[#0e8a7b]" />
                Modelos
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {TEMPLATES.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(i)}
                    className={`aspect-[4/5] rounded-lg border-2 transition-all overflow-hidden relative group ${
                      selectedTemplate === i
                        ? "border-[#0e8a7b] ring-2 ring-[#0e8a7b]/20"
                        : "border-[#e2e8f0] hover:border-[#0e8a7b]/40"
                    }`}
                  >
                    <div className="w-full h-full scale-[0.15] origin-top-left" style={{ width: "667%", height: "667%" }}>
                      {t.render("Título", "", null, null)}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm py-1">
                      <span className="text-[9px] font-medium text-[#1a2332]">{t.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Text controls */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0]">
              <h3 className="text-sm font-semibold text-[#1a2332] mb-3 flex items-center gap-2">
                <Type size={16} className="text-[#0e8a7b]" />
                Textos
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-[#64748b] mb-1 block">Título</label>
                  <Textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Digite o título do post..."
                    className="resize-none text-sm border-[#e2e8f0] focus:border-[#0e8a7b] focus:ring-[#0e8a7b]/20 rounded-lg"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#64748b] mb-1 block">Subtítulo (opcional)</label>
                  <Input
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Texto complementar..."
                    className="text-sm border-[#e2e8f0] focus:border-[#0e8a7b] focus:ring-[#0e8a7b]/20 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Image controls */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0]">
              <h3 className="text-sm font-semibold text-[#1a2332] mb-3 flex items-center gap-2">
                <Upload size={16} className="text-[#0e8a7b]" />
                Imagens
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-[#64748b] mb-1 block">Foto principal</label>
                  <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-[#cbd5e1] rounded-lg cursor-pointer hover:border-[#0e8a7b] hover:bg-[#f0faf8] transition-colors">
                    <ImageIcon size={16} className="text-[#94a3b8]" />
                    <span className="text-xs text-[#64748b]">
                      {image ? "Trocar imagem" : "Escolher imagem"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, setImage)}
                    />
                  </label>
                  {image && (
                    <button
                      onClick={() => setImage(null)}
                      className="text-[10px] text-red-500 mt-1 hover:underline"
                    >
                      Remover imagem
                    </button>
                  )}
                </div>
                <div>
                  <label className="text-xs font-medium text-[#64748b] mb-1 block">Logomarca</label>
                  <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-[#cbd5e1] rounded-lg cursor-pointer hover:border-[#0e8a7b] hover:bg-[#f0faf8] transition-colors">
                    <ImageIcon size={16} className="text-[#94a3b8]" />
                    <span className="text-xs text-[#64748b]">
                      {logo ? "Trocar logo" : "Escolher logo"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, setLogo)}
                    />
                  </label>
                  {logo && (
                    <button
                      onClick={() => setLogo(null)}
                      className="text-[10px] text-red-500 mt-1 hover:underline"
                    >
                      Remover logo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex-1 flex flex-col items-center order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-4 sm:p-6 w-full max-w-[500px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">Preview</span>
                <span className="text-xs text-[#0e8a7b] font-medium">{template.name}</span>
              </div>
              {/* Preview container - maintains 4:5 aspect ratio */}
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border border-[#e2e8f0]">
                {template.render(title, subtitle, image, logo)}
              </div>
            </div>

            {/* Hidden render target at actual resolution */}
            <div className="fixed -left-[9999px] top-0">
              <div
                ref={canvasRef}
                style={{ width: 432, height: 540 }}
                className="overflow-hidden"
              >
                {template.render(title, subtitle, image, logo)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gerador;
