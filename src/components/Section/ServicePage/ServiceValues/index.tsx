import { ServiceValueCard } from '@/components/ServiceValueCard'
import { useLocale } from 'next-intl'

type TServiceValueCard = {
  title: string
  description: string
  image: string
}

const serviceValues_en: TServiceValueCard[] = [
  {
    title: 'DATA',
    description: 'Compiling data through rigorous scientific methods.',
    image: '/images/services/service-value-1.png',
  },
  {
    title: 'STRATEGY',
    description:
      'Conducting analysis with seasoned Academics and Professionals.',
    image: '/images/services/service-value-2.png',
  },
  {
    title: 'OPERATION',
    description:
      'Organizing tactical operations with a multi-approach strategy based on specific goals.',
    image: '/images/services/service-value-3.png',
  },
]

const serviceValues_id: TServiceValueCard[] = [
  {
    title: 'DATA',
    description: 'Compiling data through rigorous scientific methods.',
    image: '/images/services/service-value-1.png',
  },
  {
    title: 'STRATEGY',
    description:
      'Conducting analysis with seasoned Academics and Professionals.',
    image: '/images/services/service-value-2.png',
  },
  {
    title: 'OPERATION',
    description:
      'Organizing tactical operations with a multi-approach strategy based on specific goals.',
    image: '/images/services/service-value-3.png',
  },
]

const ServiceValues = () => {
  const localActive = useLocale()
  const serviceValues =
    localActive == 'id' ? serviceValues_id : serviceValues_en
  return (
    <section className="grid grid-cols-1 mobile-min:grid-cols-2 lg:grid-cols-3 w-full text-black gap-x-48 gap-y-50">
      {serviceValues.map((serviceValue) => (
        <ServiceValueCard
          key={serviceValue.title}
          title={serviceValue.title}
          description={serviceValue.description}
          image={serviceValue.image}
        />
      ))}
    </section>
  )
}

export default ServiceValues
