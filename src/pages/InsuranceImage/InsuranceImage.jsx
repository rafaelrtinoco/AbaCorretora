function InsuranceImage({ src, alt }) {
  return (
    <img 
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="insurance-icon"
      loading="lazy"
    />
  );
}

export default InsuranceImage;