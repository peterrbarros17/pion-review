// import Image from "next/image";
// import Link from "next/link";

// interface CardPopularProps {}

// export default function CardPopular({}: CardPopularProps) {
//   const popular = [
//     {
//       id: 1,
//       icon: "https://thumbs.dreamstime.com/b/october-elkins-park-pa-original-playstation-sony-wooden-floor-199953091.jpg",
//       title: "Os melhores games retros",
//       description: "Veja os jogos que nunca sairam de moda",
//       slug: "os-melhores-games-retros",
//     },
//     {
//       id: 2,
//       icon: "https://t4.ftcdn.net/jpg/06/10/89/65/360_F_610896512_UcPJ8xuiqMGxBWBcEVrEk8m0Ar2V35DV.jpg",
//       title: "Top 10 melhores RPG's MMO",
//       description: "Nosso top jogos que valem a pena experimentar",
//       slug: "top-10-rpgs-mmo",
//     },
//     {
//       id: 3,
//       icon: "https://www.carnetdebord.info/wp-content/uploads/2023/01/serious-game-en-entreprise-scaled.jpg",
//       title: "Como o mercado de games inpulsiona a inovação",
//       description:
//         "Descubra como os jogos digitais estão mudando a sociedade digital",
//       slug: "mercado-de-games",
//     },
//   ];

//   return (
//     <section>
//       <ul className="flex gap-4 flex-wrap">
//         {popular.map((item) => (
//           <li
//             key={item.id}
//             className="flex flex-col w-1/3 flex-grow md:flex-1 gap-4"
//           >
//             <Link href={`/popular/${item.slug}`}>
//               <figure>
//                 <Image
//                   src={item.icon}
//                   alt={item.title}
//                   width={1920}
//                   height={1080}
//                   priority={true}
//                   className="md:w-80 h-56"
//                 />
//               </figure>
//               <article className="flex flex-col items-start gap-4">
//                 <span>{item.id}</span>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </article>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
