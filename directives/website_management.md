# Diretiva: Gerenciamento do Website

## Objetivo
Manter o portal Strategic Human atualizado, funcional e alinhado com a identidade da marca SME Resilience Toolkit™.

## Arquitetura do Frontend
- **Framework:** React 19 + TypeScript 5.8
- **Build:** Vite 6 (porta 3000 no dev)
- **Estilo:** Tailwind CSS 4 com design system customizado
- **Animações:** Motion (Framer Motion)
- **Ícones:** Lucide React

## Estrutura de Páginas
| Arquivo | Rota (estado) | Propósito |
|---|---|---|
| `src/pages/Home.tsx` | `home` | Landing page principal |
| `src/pages/Methodology.tsx` | `methodology` | Framework SME Resilience Toolkit™ |
| `src/pages/Certification.tsx` | `certification` | Níveis de certificação |
| `src/pages/Consultants.tsx` | `consultants` | Proposta de valor para consultores |
| `src/pages/Companies.tsx` | `companies` | Proposta de valor para empresas |
| `src/pages/FAQ.tsx` | `faq` | Perguntas frequentes |
| `src/pages/Contact.tsx` | `contact` | Formulário de captura de leads |

## Design System (Cores da Marca)
```
brand-offwhite:  #FDFCFB  (fundo padrão)
brand-deepblue:  #0A192F  (primária escura)
brand-blue:      #112240  (primária hover)
brand-accent:    #FF6B6B  (coral — destaques e CTAs)
brand-muted:     #64748B  (texto secundário)
```

## Como Atualizar Conteúdo
1. Abra o arquivo `.tsx` da página correspondente
2. Edite o conteúdo textual dentro dos elementos JSX
3. Teste localmente com `npm run dev`
4. Faça build de produção com `npm run build`

## Como Adicionar Nova Página
1. Crie `src/pages/NovaPagina.tsx`
2. Adicione o novo tipo em `src/types.ts` (ex: `'nova-pagina'`)
3. Importe e adicione o case em `src/App.tsx`
4. Adicione o item de navegação em `src/components/Navbar.tsx`
5. Adicione o link no footer em `src/components/Footer.tsx`

## Regras de Estilo
- Nunca usar emojis na interface (portal corporativo premium)
- Manter o tom assertivo e técnico: "govern", "fiscal", "protocol", "framework"
- Usar `font-display` (Space Grotesk) para títulos
- Usar `font-sans` (Inter) para corpo de texto
- Manter animações sutis com `motion/react`

## Edge Cases
- Todas as imagens devem ter `referrerPolicy="no-referrer"` e atributo `alt`
- Evitar hardcoded URLs — usar variáveis de ambiente para domínio de produção
- O roteamento é client-side via `useState` — não há URLs reais de página
