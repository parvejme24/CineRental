import Rating from "./Rating";

export default function MovieCard({ movie, getImageUrl }) {
    const { cover, title, descriptio, gener, rating, price } = movie
    return (
        <>
            <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img class="w-full object-cover" src={getImageUrl(cover)} alt="" />
                <figcaption class="pt-4">
                    <h3 class="text-xl mb-1">{title}</h3>
                    <p class="text-[#575A6E] text-sm mb-2">{descriptio}</p>
                    <div class="flex items-center space-x-1 mb-5">
                        <Rating value={rating} />
                    </div>
                    <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#">
                        <img src="./assets/tag.svg" alt="" />
                        <span>${price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    );
}