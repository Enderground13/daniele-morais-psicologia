export const PROFILE = {
  name: "Dra. [Nome da Psicóloga]",
  crp: "CRP 06/[Número]",
  ePsiStatus: "Cadastro e-Psi Ativo no Conselho Federal de Psicologia",
  approach: "Psicoterapia Individual Baseada em Evidências",
  baseCity: "Guarujá",
  baseState: "SP",
  whatsappNumber: "5513999999999",
  whatsappMessage: "Olá! Encontrei seu site e gostaria de informações sobre o atendimento psicológico online.",
  siteUrl: "https://vercel.app",
  siteName: "Psicologia Clínica Online | Guarujá, Vale do Paraíba e SP"
};

export function getWhatsAppLink(customText?: string): string {
  const msg = encodeURIComponent(customText || PROFILE.whatsappMessage);
  return `https://wa.me{PROFILE.whatsappNumber}?text=${msg}`;
}
