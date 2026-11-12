export const PROFILE = {
  name: "Daniele Barbosa Pirriello de Morais",
  crp: "CRP 06/136976",
  ePsiStatus: "Cadastro e-Psi Ativo no Conselho Federal de Psicologia",
  approach: "Psicanálise Winnicottiana (Donald Woods Winnicott)",
  shortApproach: "Psicanálise Winnicottiana",
  education: "Graduada em Psicologia pelo UNISAL (Centro Universitário Salesiano de São Paulo — Lorena-SP)",
  earlyCareer: "Iniciou sua trajetória prática na USP-Lorena e atua na psicologia clínica desde 2016",
  experienceYears: "10 anos de experiência clínica (presencial desde 2016 e online desde 2021)",
  personalBio: "37 anos, casada e mãe, une o rigor teórico da psicanálise a uma escuta humana, sensível e acolhedora.",
  audience: "Adolescentes (a partir de 15 anos), Adultos e Idosos",
  schedule: "Atendimento nos períodos da manhã e da tarde",
  reimbursement: "Atendimento particular com emissão de recibo para reembolso junto a planos de saúde",
  homeCareCities: ["Guarujá - SP", "Santos - SP"],
  homeCareDetails: "Atendimento psicológico domiciliar nas cidades de Guarujá e Santos, voltado especialmente para idosos, pessoas com mobilidade reduzida ou pacientes em quadros depressivos nos quais o deslocamento até o consultório seja dificultoso.",
  baseCity: "Guarujá",
  baseState: "SP",
  whatsappNumber: "5512981026474",
  whatsappMessage: "Olá, Daniele! Encontrei seu site e gostaria de informações sobre o atendimento psicológico.",
  siteUrl: "https://vercel.app",
  siteName: "Daniele Barbosa Pirriello de Morais | Psicóloga e Psicanálise Winnicottiana (CRP 06/136976)"
};

export function getWhatsAppLink(customText?: string): string {
  const msg = encodeURIComponent(customText || PROFILE.whatsappMessage);
  return `https://wa.me{PROFILE.whatsappNumber}?text=${msg}`;
}
