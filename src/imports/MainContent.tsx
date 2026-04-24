import svgPaths from "./svg-cnjb5ufrkn";
import imgImageUxUiDesignWorkspace from "figma:asset/7c69e1dcdcb33d9f6d8864eb89fc267c5c65b7b4.png";
import imgImage1 from "figma:asset/17cde107336d3b3dd62689587ca994f083f29554.png";
import imgImageAppDeFinancasPessoais from "figma:asset/3cdd9c9072a1c827a827dd44256f3155deb6689c.png";
import imgImageDashboardAnalytics from "figma:asset/adfe2ddac0de32240cf38ab45863ebfde8a1af88.png";
import imgImage2 from "figma:asset/d15d892926dd47c3273c04bb07fe8a074d4084ae.png";

function Container2() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[36px] left-0 rounded-[26843500px] top-0 w-[127.338px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#364153] text-[14px] top-[7.8px] whitespace-nowrap">Designer UX/UI</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[120px] left-0 top-[128px] w-[488px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[#4a5565] text-[60px] top-[-4.4px] whitespace-nowrap">digitais memoráveis</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[248px] left-0 top-[60px] w-[488px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[#101828] text-[60px] top-[-4.4px] whitespace-nowrap">Criando experiências</p>
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[176px] left-0 top-[321px] w-[488px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a5565] text-[18px] top-[-21px] w-[480px]">
        <p className="leading-[29.25px] mb-0">Sempre gostei de transformar ideias em algo concreto por meio do design. Percebi que o design não é só sobre estética, mas sobre tornar as coisas mais claras, úteis e fáceis de usar.</p>
        <p className="leading-[29.25px] mb-0">Hoje sou UI/UX e Product Designer. Construo experiências que façam sentido para as pessoas e que funcionem de verdade no dia a dia, alinhadas aos objetivos das empresas.</p>
        <p className="leading-[29.25px]">Colaborei com grandes marcas e times de tecnologia e ajudo a transformar problemas complexos em soluções simples e intuitivas.</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[165.38px] size-[18px] top-[19px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M9 3.75V14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.25 9L9 14.25L3.75 9" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#101828] h-[51px] left-0 rounded-[26843500px] top-[654px] w-[199px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[95.5px] not-italic text-[16px] text-center text-white top-[13.8px] whitespace-nowrap">Ver meu trabalho</p>
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[728.5px] left-0 top-0 w-[488px]" data-name="Container">
      <Container2 />
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

function ImageUxUiDesignWorkspace() {
  return (
    <div className="h-[514px] overflow-clip relative shrink-0 w-[386px]" data-name="Image (UX/UI Design Workspace)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageUxUiDesignWorkspace} />
      <div className="absolute h-[592px] left-[-15px] top-[-84px] w-[577px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[87.02%] left-[-40.46%] max-w-none top-[13.05%] w-[156.25%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[506px] items-start left-[74px] overflow-clip rounded-[16px] top-[24px] w-[384px]" data-name="Container">
      <ImageUxUiDesignWorkspace />
    </div>
  );
}

function Container5() {
  return <div className="absolute blur-[64px] left-[384px] opacity-30 rounded-[26843500px] size-[128px] top-[506px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(152, 16, 250) 100%)" }} />;
}

function Container6() {
  return <div className="absolute blur-[64px] left-[-24px] opacity-30 rounded-[26843500px] size-[128px] top-[-24px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(255, 105, 0) 100%)" }} />;
}

function Container3() {
  return (
    <div className="absolute h-[493px] left-[590px] top-[193px] w-[288px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[728.5px] relative shrink-0 w-[1056px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Container3 />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute content-stretch flex h-[808.5px] items-center justify-center left-0 px-[48px] top-0 w-[1152px]" data-name="Hero">
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[48px] left-[383.93px] not-italic text-[#101828] text-[48px] text-center top-[-3px] whitespace-nowrap">Serviços</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[768px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[366px] not-italic text-[#4a5565] text-[18px] text-center top-0 w-[696px]">Ofereço soluções completas de design que cobrem todo o ciclo de desenvolvimento de produtos digitais</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[166px] items-start left-[144px] top-[40.5px] w-[768px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.7 16.7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex items-center justify-center left-[32px] px-[12px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[104px] w-[176px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-[2px] not-italic text-[#101828] text-[20px] top-[7.5px] w-[107px]">Branding</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[156px] left-[32px] top-[172px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.4px] w-[168px]">Gestão estratégica de uma marca, envolvendo ações para criar, fortalecer e gerir a sua imagem e reputação no mercado</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white h-[360px] left-0 rounded-[16px] top-0 w-[240px]" data-name="Container">
      <Container10 />
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 9H21" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 21V9" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex items-center justify-center left-[32px] px-[12px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[104px] w-[176px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-1.2px] w-[91px]">Landing Pages</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[130px] left-[32px] top-[196.5px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-32px] w-[173px]">Página web criada com o objetivo exclusivo de conversão, projetada para transformar visitantes em leads ou clientes.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-white h-[360px] left-[272px] rounded-[16px] top-0 w-[240px]" data-name="Container">
      <Container12 />
      <Heading3 />
      <Paragraph3 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1adf7700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18H12.01" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex items-center justify-center left-[32px] px-[12px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[104px] w-[176px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-1.2px] whitespace-nowrap">Produtos Digitais</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[130px] left-[32px] top-[144px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[7.5px] w-[168px]">Itens comercializados online, entregues eletronicamente e consumidos em dispositivos como computadores ou smartphones</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white h-[360px] left-[544px] rounded-[16px] top-0 w-[240px]" data-name="Container">
      <Container14 />
      <Heading4 />
      <Paragraph4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2476dfc0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf6f2500} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f047a30} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p7aea480} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eb1d9c0} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex items-center justify-center left-[32px] px-[12px] rounded-[14px] size-[48px] top-[32px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[104px] w-[176px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-1.2px] whitespace-nowrap">Site System</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[130px] left-[32px] top-[144px] w-[176px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[7.5px] w-[160px]">Desenvolvimento de sistemas de design escaláveis para manter consistência visual em todos os produtos.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white h-[360px] left-[816px] rounded-[16px] top-0 w-[240px]" data-name="Container">
      <Container16 />
      <Heading5 />
      <Paragraph5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[360px] left-0 top-[192px] w-[1056px]" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Services() {
  return (
    <div className="absolute bg-[#f9fafb] h-[552px] left-[48px] top-[936.5px] w-[1056px]" data-name="Services">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[48px] left-[383.8px] not-italic text-[#101828] text-[48px] text-center top-[-3px] whitespace-nowrap">Projetos em Destaque</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[383.93px] not-italic text-[#4a5565] text-[18px] text-center top-[-1.4px] whitespace-nowrap">Uma seleção dos meus trabalhos mais recentes e impactantes</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[100px] items-start left-[144px] top-0 w-[768px]" data-name="Container">
      <Heading6 />
      <Paragraph6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[32px] left-0 rounded-[26843500px] top-0 w-[104.438px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[25px] not-italic text-[#364153] text-[14px] top-[5.75px] whitespace-nowrap">Website</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[40px] left-0 top-[48px] w-[504px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[-2px] whitespace-nowrap">{`"Sicredi & Smurfs"`}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[104px] w-[504px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[-0.6px] w-[458px]">Educação Sustentável: +34 mil usuários com uma plataforma gamificada</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-0 rounded-[26843500px] top-0 w-[100.65px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[7px] not-italic text-[#364153] text-[14px] top-[4.25px] whitespace-nowrap">UX Research</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-[108.65px] rounded-[26843500px] top-0 w-[83.825px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[22.35px] not-italic text-[#364153] text-[14px] top-[4.25px] whitespace-nowrap">UX/UI</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-[200.48px] rounded-[26843500px] top-0 w-[97.175px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#364153] text-[14px] top-[3.8px] whitespace-nowrap">Prototyping</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[28px] left-0 top-[186.5px] w-[504px]" data-name="Container">
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[140.55px] size-[18px] top-[3px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M5.25 5.25H12.75V12.75" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.25 12.75L12.75 5.25" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[24px] left-0 top-[238.5px] w-[158.55px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[66.5px] not-italic text-[#101828] text-[16px] text-center top-[-2.2px] whitespace-nowrap">Ver case completo</p>
      <Icon5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[262.5px] left-[552px] top-[57.75px] w-[504px]" data-name="Container">
      <Container21 />
      <Heading7 />
      <Paragraph7 />
      <Container22 />
      <Button1 />
    </div>
  );
}

function ImageAppDeFinancasPessoais() {
  return (
    <div className="h-[432px] relative shrink-0 w-[538px]" data-name="Image (App de Finanças Pessoais)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[90.45%] left-[-3.6%] max-w-none top-[-1.75%] w-[100.08%]" src={imgImageAppDeFinancasPessoais} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[378px] items-start left-0 overflow-clip rounded-[16px] top-0 w-[504px]" data-name="Container">
      <ImageAppDeFinancasPessoais />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[378px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container23 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[32px] left-0 rounded-[26843500px] top-0 w-[89.412px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[20px] left-[7px] not-italic text-[#364153] text-[14px] top-[6px] w-[97px]">Mobile App</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[40px] left-0 top-[48px] w-[504px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[-2px] whitespace-nowrap">Case Livelong</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[104px] w-[504px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[-0.6px] w-[484px]">Facilitando a decisão de compra com uma experiência de nutrição guiada</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-0 rounded-[26843500px] top-0 w-[134.213px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[#364153] text-[14px] top-[4.5px] whitespace-nowrap">Design System</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-[142.21px] rounded-[26843500px] top-0 w-[98.563px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#364153] text-[14px] top-[3.8px] whitespace-nowrap">UI Design</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-[248.77px] rounded-[26843500px] top-0 w-[114.338px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[14.23px] not-italic text-[#364153] text-[14px] top-[4.5px] whitespace-nowrap">UX Research</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[28px] left-0 top-[186.5px] w-[504px]" data-name="Container">
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[262.5px] left-0 top-[58.5px] w-[504px]" data-name="Container">
      <Container26 />
      <Heading8 />
      <Paragraph8 />
      <Container27 />
    </div>
  );
}

function ImageDashboardAnalytics() {
  return (
    <div className="h-[378px] relative shrink-0 w-full" data-name="Image (Dashboard Analytics)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageDashboardAnalytics} />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[378px] items-start left-[552px] overflow-clip rounded-[16px] top-0 w-[504px]" data-name="Container">
      <ImageDashboardAnalytics />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[378px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container28 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[27px] left-0 rounded-[26843500px] top-0 w-[224px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[25px] not-italic text-[#364153] text-[14px] top-[4px] whitespace-nowrap">Arquitetura da informação</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[40px] left-0 top-[48px] w-[504px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[-2px] whitespace-nowrap">Rumos Mais Pretos</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[104px] w-[504px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[-0.6px] w-[472px]">Impacto Social no Mercado Publicitário: Conectando estudantes PPI a oportunidades reais de carreira</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-[-8px] rounded-[26843500px] top-[0.25px] w-[101.45px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#364153] text-[14px] top-[4.25px] w-[94px]">UI/UX Design</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[28px] left-[120px] rounded-[26843500px] top-[0.5px] w-[118px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[4px] whitespace-nowrap">Product Design</p>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-[#f3f4f6] h-[28px] left-[265px] rounded-[26843500px] top-[0.5px] w-[108px]" data-name="Text" />;
}

function Container32() {
  return (
    <div className="absolute h-[28px] left-0 top-[186.5px] w-[504px]" data-name="Container">
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Button2() {
  return <div className="absolute h-[24px] left-0 top-[238.5px] w-[158.55px]" data-name="Button" />;
}

function Container30() {
  return (
    <div className="absolute h-[262.5px] left-[552px] top-[58.5px] w-[504px]" data-name="Container">
      <Container31 />
      <Heading9 />
      <Paragraph9 />
      <Container32 />
      <Button2 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[276px] not-italic text-[#364153] text-[14px] top-[191px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">UX Research</p>
        <p className="leading-[20px]">&nbsp;</p>
      </div>
    </div>
  );
}

function ImageECommerceFashion() {
  return (
    <div className="h-[378px] overflow-clip relative shrink-0 w-full" data-name="Image (E-commerce Fashion)">
      <div className="absolute h-[1049px] left-[-406px] top-[-488.5px] w-[1920px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[19.38%] max-w-none size-[29.59%] top-[50.01%]" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[378px] items-start left-0 overflow-clip rounded-[16px] top-0 w-[504px]" data-name="Container">
      <ImageECommerceFashion />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[378px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container33 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[1230px] items-start left-0 top-[164px] w-[1056px]" data-name="Container">
      <Container19 />
      <Container24 />
      <Container29 />
    </div>
  );
}

function Cases() {
  return (
    <div className="absolute h-[1394px] left-[48px] top-[1744.5px] w-[1056px]" data-name="Cases">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[96px] left-[25px] top-[-0.25px] w-[488px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[48px] left-[-32px] not-italic text-[#101828] text-[48px] top-[0.25px] whitespace-nowrap">Vamos criar algo incrível juntos?</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[87.75px] left-0 top-[120px] w-[488px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[-0.6px] w-[452px]">Estou sempre aberta a novos projetos e colaborações. Se você tem uma ideia ou precisa de ajuda com design de produto, entre em contato!</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[87.75px] left-0 top-[239.75px] w-[488px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[-0.6px] w-[451px]">Respondo geralmente em até 24 horas. Vamos conversar sobre como posso ajudar a transformar sua visão em realidade.</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[327.5px] left-[35px] top-[62px] w-[488px]" data-name="Container">
      <Heading10 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#101828] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.2px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-2.2px] whitespace-nowrap">brunnascosta@gmail.com</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[48px] relative shrink-0 w-[164.338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white h-[96px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[24px] relative size-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.peba4c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#101828] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.2px] whitespace-nowrap">LinkedIn</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[27px] leading-[24px] left-[-5px] not-italic text-[#101828] text-[14px] top-[0.5px] w-[302px]">{` https://linkedin.com/in/brunna-santos-costa`}</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[48px] relative shrink-0 w-[121.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white h-[96px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[24px] relative size-full">
          <Container40 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pbf3e180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p5272800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#101828] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[14px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-0.2px] whitespace-nowrap">Portfolio completo</p>
    </div>
  );
}

function Container47() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="h-[48px] relative shrink-0 w-[111.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white h-[96px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[24px] relative size-full">
          <Container44 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[394px] items-start left-[584px] top-[139.5px] w-[416px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute bg-[#f9fafb] h-[520px] left-[64px] top-[3283px] w-[1024px]" data-name="Contact">
      <Container34 />
      <Container35 />
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="relative size-full" data-name="Main Content">
      <Hero />
      <Services />
      <Cases />
      <Contact />
    </div>
  );
}