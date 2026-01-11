const ColorPallette = ({ image }: { image: any }) => {
  // Handle case where dominantColors might not exist (removed to reduce file size)
  const dominantColors = image.colorData?.dominantColors || [];
  
  return (
    <div data-component="" className="w-full pb-4 md:pb-4 max-w-4xl mt-8 pt-8 border-t border-neutral-500/50 border-dotted">
      <h2 className="text-base mb-4">Farbpalette</h2>
      {dominantColors.length > 0 ? (
        <div className="flex flex-wrap gap-4 mb-4">
          {dominantColors.map((color: any, index: any) => {
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                title={`${color.hex} (${Math.round(color.percentage * 100)}%)`}
                onClick={() => {
                  navigator.clipboard.writeText(color.hex);
                  // Optional: Add a visual feedback for copy
                  const el = document.createElement("div");
                  document.body.appendChild(el);
                  setTimeout(() => document.body.removeChild(el), 1000);
                }}>
                <div
                  className="w-10 md:w-12 h-10 md:h-12 border border-neutral-500/20"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-[8px] tracking-wide uppercase hidden md:block font-mono absolute inset-0 p-1 opacity-0 group-hover:opacity-100 text-white transition-opacity">{color.hex}</div>
              </div>
            );
          })}
        </div>
      ) : null}
      {image.colorData?.colorfulness !== undefined && (
        <p className="text-[11px] mb-0 font-mono">
          Farbwert: <span className="">{image.colorData.colorfulness}%</span>
        </p>
      )}
    </div>
  );
};

export default ColorPallette;
