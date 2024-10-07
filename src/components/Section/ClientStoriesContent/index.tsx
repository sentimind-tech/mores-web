import { PageHeader } from "@/components/PageHeader";
import { HeadingText, BodyText } from "@/components/Text";
import Collapsible from "@/components/Collapsible";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const ClientStoriesContent = () => {
  const t = useTranslations("TechMores");

  return (
    <>
      <section className="relative">
        <PageHeader
          background="/images/bg/bg-client-stories.jpg"
          title="CLIENT STORIES"
          overlay={true}
        />
      </section>

      <section className="py-[100px] px-16">
        <div className="w-full max-w-[1040px] mx-auto">
          <div className="block">
            <HeadingText type="h3" className="text-black uppercase block mb-8">
              Building Agile Emergency Response Model for Indonesian Tourism’s
              Crisis Management
            </HeadingText>
            <Collapsible
              title={
                <div className="flex items-center gap-[30px] py-[9px]">
                  <div className="w-[64px] aspect-square relative shrink-0">
                    <Image
                      src="/images/logo/kemenparekraf.png"
                      alt="Logo kemenparekraf"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                  <BodyText
                    type="body1"
                    className="text-black block w-full md:max-w-[75%]"
                  >
                    Ministry of Tourism and Creative Economy of The Republic of
                    Indonesia (KEMENPAREKRAF)
                  </BodyText>
                </div>
              }
              open={true}
            >
              <div className="flex flex-col gap-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[30px]">
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      The Challenge
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      When a crisis struck in tourism sectors, information
                      overflow creates waves of invalid information which
                      compromise coordination between responsible parties. The
                      confusion may cripple aid distribution and logistic
                      calculation even jeopardize the reputation of Indonesian
                      tourism as a whole.
                    </BodyText>
                  </div>
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      Approach and Result
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      Working with a third party, government institutions, and
                      other Kemenparekraf-related associations, we did baseline
                      survey, primary & secondary research, focus group
                      discussion (FGD), creative multimedia agenda setting, and
                      media engagement. The results were several essential
                      documents, such as SOP Tourism Crisis Center, Regulation
                      of Ministry of Tourism on Crisis Management of Regional
                      Tourism, Public Relation for Crisis Management Protocol,
                      Marketing Strategy Guide, and other strategic documents.
                      <br />
                      <br />
                      vIn 2020-2021, we responded to the COVID-19 pandemic
                      crisis by conducting day-per-day live media monitoring,
                      ethnography study, and national and international scale
                      survey, which laid the foundation of Kemenparekraf’s
                      marketing strategy.
                    </BodyText>
                  </div>
                </div>
                <div className="block">
                  <HeadingText
                    type="h5"
                    className="uppercase text-blue-pacific md:max-w-[75%]"
                  >
                    We closely monitored and analyzed public perception of
                    crisis on the media.
                  </HeadingText>
                  <div className="w-full max-w-[856px] aspect-[16/8] mx-auto relative mt-[30px]">
                    <Image
                      src="/images/thumb/chart-1.jpg"
                      alt="Chart 1"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                </div>
                <div className="block">
                  <HeadingText
                    type="h5"
                    className="uppercase text-blue-pacific md:max-w-[75%]"
                  >
                    The analysis then were presented in meaningful and
                    easy-to-understand visuals.
                  </HeadingText>
                  <div className="w-full max-w-[856px] aspect-[16/8] mx-auto relative mt-[30px]">
                    <Image
                      src="/images/thumb/chart-2.jpg"
                      alt="Chart 2"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="block mt-[150px]">
            <HeadingText type="h3" className="text-black uppercase block mb-8">
              Recovering from current account deficit of Indonesia tourism
              service sector
            </HeadingText>
            <Collapsible
              title={
                <div className="flex items-center gap-[30px] py-[9px]">
                  <div className="w-[170px] aspect-[16/4] relative shrink-0">
                    <Image
                      src="/images/logo/bi.png"
                      alt="Logo BI"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                  <BodyText
                    type="body1"
                    className="text-black block w-full md:max-w-[40%]"
                  >
                    Bank Indonesia (Bank Sentral Republik Indonesia)
                  </BodyText>
                </div>
              }
              open={true}
            >
              <div className="flex flex-col gap-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[30px]">
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      The Challenge
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      In 2019, persisting fallout of past disasters in Bali and
                      Lombok decreased the number of tourists, which deterred
                      the government recovery plan for the current account
                      deficit (CAD). The situation prompted the development of
                      Tourism Crisis Management (MKK) to mitigate potential
                      disasters or crisis.
                    </BodyText>
                  </div>
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      Approach and Result
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      We implemented 3 approaches; literature studies, focus
                      group discussion, and quantitative & qualitative survey
                      using primary & secondary data. The analysis was done in 2
                      stages; First, we discovered foreign tourists’ perception
                      towards disaster, decision-making processes, and preferred
                      travel destinations using big data analysis, then we used
                      the findings to develop strategic mapping and action
                      plans. The result was a set of strategic advice for Bank
                      Indonesia and related stakeholders (Minister/Institutions)
                      to formulate policies that could potentially increase
                      government revenue in trade service.
                    </BodyText>
                  </div>
                </div>
                <div className="block">
                  <HeadingText
                    type="h5"
                    className="uppercase text-blue-pacific md:max-w-[75%]"
                  >
                    We conducted two stages of analysis to identify tourists’
                    perception and develop strategic mapping.
                  </HeadingText>
                  <div className="w-full max-w-[856px] aspect-[16/8] mx-auto relative mt-[30px]">
                    <Image
                      src="/images/thumb/chart-3.jpg"
                      alt="Chart 3"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="block mt-[150px]">
            <HeadingText type="h3" className="text-black uppercase block mb-8">
              Constructing backbone system to counter misinformation and
              disinformation in Indonesia
            </HeadingText>
            <Collapsible
              title={
                <div className="flex items-center gap-[30px] py-[9px]">
                  <div className="w-[170px] aspect-[16/5] relative shrink-0">
                    <Image
                      src="/images/logo/kominfo.png"
                      alt="Logo Kominfo"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                  <BodyText
                    type="body1"
                    className="text-black block w-full md:max-w-[40%]"
                  >
                    Ministry of Communication and Information Technology
                    (Kominfo)
                  </BodyText>
                </div>
              }
              open={true}
            >
              <div className="flex flex-col gap-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[30px]">
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      The Challenge
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      In 2019, persisting fallout of past disasters in Bali and
                      Lombok decreased the number of tourists, which deterred
                      the government recovery plan for the current account
                      deficit (CAD). The situation prompted the development of
                      Tourism Crisis Management (MKK) to mitigate potential
                      disasters or crisis.
                    </BodyText>
                  </div>
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      Approach and Result
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      We implemented 3 approaches; literature studies, focus
                      group discussion, and quantitative & qualitative survey
                      using primary & secondary data. The analysis was done in 2
                      stages; First, we discovered foreign tourists’ perception
                      towards disaster, decision-making processes, and preferred
                      travel destinations using big data analysis, then we used
                      the findings to develop strategic mapping and action
                      plans. The result was a set of strategic advice for Bank
                      Indonesia and related stakeholders (Minister/Institutions)
                      to formulate policies that could potentially increase
                      government revenue in trade service.
                    </BodyText>
                  </div>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="block mt-[150px]">
            <HeadingText type="h3" className="text-black uppercase block mb-8">
              Onwards to Indonesia’s infrastructure service that the people
              deserved
            </HeadingText>
            <Collapsible
              title={
                <div className="flex items-center gap-[30px] py-[9px]">
                  <BodyText type="body1" className=" text-black block w-full">
                    Multiple Public-Private Partnership (PPP) Projects
                  </BodyText>
                </div>
              }
              open={true}
            >
              <div className="flex flex-col gap-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[30px]">
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      The Challenge
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      Indonesian government seeks partnerships with private
                      sectors to raise the country’s infrastructure investment
                      (USD 319.7Bn) and push ongoing and future project
                      developments. However, Public-Private Partnership (PPP) is
                      a newly developed financing scheme and there are only a
                      few experts specialized in Indonesian PPP.
                    </BodyText>
                  </div>
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      Approach and Result
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      We conduct data gathering through real-demand surveys, big
                      data analysis, strategic planning focusing on risk-sharing
                      between public & private sectors, policy analysis, and
                      feasibility study development. The results are data
                      analysis and strategic planning documents which
                      successfully lead to better infrastructure service for the
                      public, more structured PPP projects, successful
                      transactions, timely and realistic PPP project
                      implementation.
                    </BodyText>
                  </div>
                </div>
                <div className="block">
                  <HeadingText
                    type="h5"
                    className="uppercase text-blue-pacific md:max-w-[75%]"
                  >
                    As a newly developed financing scheme, there is still a few
                    experts specialized in Indonesian Public-Private Partnership
                    (PPP).
                  </HeadingText>
                  <div className="w-full max-w-[856px] aspect-[16/8] mx-auto relative mt-[30px]">
                    <Image
                      src="/images/thumb/chart-4.jpg"
                      alt="Chart 4"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                    />
                  </div>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="block mt-[150px]">
            <HeadingText type="h3" className="text-black uppercase block mb-8">
              Weighing feasibility through local’s perspective
            </HeadingText>
            <Collapsible
              title={
                <div className="flex items-center gap-[30px] py-[9px]">
                  <BodyText type="body1" className=" text-black block w-full">
                    Initiatives
                  </BodyText>
                </div>
              }
              open={true}
            >
              <div className="flex flex-col gap-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[30px]">
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      The Challenge
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      Each year thousands of feasibility studies are generated
                      in Indonesia, but very few of them take into account local
                      needs and characteristics. Most would focus more on
                      inputs, outputs, investments, debt/equity, and market
                      viability, thus assigning too many variations in the
                      operational phase of the study.
                    </BodyText>
                  </div>
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      Approach and Result
                    </HeadingText>
                    <BodyText
                      type="body2"
                      className="text-gray-ironside block mt-10"
                    >
                      By taking into account various socio-economic factors and
                      employing numerous surveys and big data analysis, our
                      study delivers relation between cost and benefit of the
                      project and most importantly, to whom it would be
                      distributed the most. Understanding and acknowledging
                      local and communal perspectives whether it is in rural or
                      urban locations will raise higher acceptance results of
                      the feasibility study, which lead to better project
                      results.
                    </BodyText>
                  </div>
                  <div className="block">
                    <HeadingText
                      type="h5"
                      className="uppercase text-blue-pacific"
                    >
                      Benefits of Conducting a Feasibility Study
                    </HeadingText>
                    <div className="w-full max-w-[454px] aspect-[16/14] mx-auto relative mt-10">
                      <Image
                        src="/images/thumb/chart-5.jpg"
                        alt="Chart 5"
                        fill={true}
                        priority={true}
                        sizes="auto"
                        className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>
          </div>

          <div className="block mt-[150px]">
            <div className="text-center block relative mb-16 md:mb-[3.125rem]">
              <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
              <HeadingText
                type="h4"
                className="bg-white text-black uppercase relative z-[1] inline-block px-[2.375rem]"
              >
                CLIENT & PARTNERS
              </HeadingText>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[40px]">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[133px] aspect-square relative">
                  <Image
                    src="/images/logo/kemenparekraf-2.jpg"
                    alt="Logo 1"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[133px] aspect-square relative">
                  <Image
                    src="/images/logo/bi-2.jpg"
                    alt="Logo 2"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[133px] aspect-square relative">
                  <Image
                    src="/images/logo/itb-2.jpg"
                    alt="Logo 3"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[133px] aspect-square relative">
                  <Image
                    src="/images/logo/kemhan-2.jpg"
                    alt="Logo 4"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[133px] aspect-square relative">
                  <Image
                    src="/images/logo/bkl-2.jpg"
                    alt="Logo 5"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientStoriesContent;
