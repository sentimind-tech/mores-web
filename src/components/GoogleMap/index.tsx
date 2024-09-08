type TGoogleMapProps = {
  url: string
}

const GoogleMap = ({ url }: TGoogleMapProps) => {
  return <iframe src={url} className="google-map-iframe" loading="lazy"></iframe>
}

export default GoogleMap
