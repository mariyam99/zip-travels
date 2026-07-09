import VisaForm from './VisaForm'

const countryMeta = {
  'sri-lanka':    { name: 'Sri Lanka',      flag: '🇱🇰', processing: '24–48 hours' },
  'india':        { name: 'India',           flag: '🇮🇳', processing: '3–5 working days' },
  'indonesia':    { name: 'Indonesia',       flag: '🇮🇩', processing: '3–7 working days' },
  'maldives':     { name: 'Maldives',        flag: '🇲🇻', processing: '24–48 hours' },
  'egypt':        { name: 'Egypt',           flag: '🇪🇬', processing: '5–7 working days' },
  'cambodia':     { name: 'Cambodia',        flag: '🇰🇭', processing: '3–5 working days' },
  'dubai-uae':    { name: 'Dubai / UAE',     flag: '🇦🇪', processing: '3–5 working days' },
  'malaysia':     { name: 'Malaysia',        flag: '🇲🇾', processing: '5–7 working days' },
  'philippines':  { name: 'Philippines',     flag: '🇵🇭', processing: '5–7 working days' },
  'china':        { name: 'China',           flag: '🇨🇳', processing: '5–7 working days' },
  'azerbaijan':   { name: 'Azerbaijan',      flag: '🇦🇿', processing: '3–5 working days' },
  'europe':       { name: 'Europe (Schengen)', flag: '🇪🇺', processing: '10–15 working days' },
  'other':        { name: 'Other Countries', flag: '🌍', processing: 'Varies by country' },
}

export async function generateMetadata({ params }) {
  const meta = countryMeta[params.country] || { name: 'Visa', flag: '🌍' }
  return {
    title: `${meta.flag} ${meta.name} Visa Application | ZIP Travels`,
    description: `Apply for your ${meta.name} visa with ZIP Travels. Fast, hassle-free assistance. Submit your details and our team will handle the rest.`,
  }
}

export default function VisaPage({ params }) {
  const meta = countryMeta[params.country] || { name: params.country, flag: '🌍', processing: 'Varies' }
  return <VisaForm country={meta.name} flag={meta.flag} processing={meta.processing} slug={params.country} />
}
