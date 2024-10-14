import { Category } from "../types/category";
import { Product } from "../types/product";


type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Proteinas',
            cover: 'https://http2.mlstatic.com/D_NQ_NP_690683-MLU73224923590_122023-O.webp'
        },
        {
            id: 2,
            title: 'Carboidratos',
            cover: 'https://www.gsuplementos.com.br/upload/categoria/layout/25/13-v3.webp'
        },
        {
            id: 3,
            title: 'Vitaminas',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamkyOJLpxfiPTuZc-fJ8zN6RHYAZd11hvPQ&s'
        },
        {
            id: 4,
            title: 'Aminoácidos',
            cover: 'https://integralmedica.vtexassets.com/arquivos/ids/165312-800-auto?v=638203654869730000&width=800&height=auto&aspect=true'
        },
        {
            id: 5,
            title: 'Vegetariano',
            cover: 'https://s2-ge.glbimg.com/lu8n7R6UaF-7PINiLWp9NOHvLlk=/0x0:1254x836/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/1/b/qoh5cQTo6ZUjtjcfvTsg/esporte-veganismo.jpg'
        },
        {
            id: 6,
            title: 'Pós-treino',
            cover: 'https://s2-ge.glbimg.com/lu8n7R6UaF-7PINiLWp9NOHvLlk=/0x0:1254x836/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/1/b/qoh5cQTo6ZUjtjcfvTsg/esporte-veganismo.jpg'


        }
    ],
    products: [
        { id: 4, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/185/image01-interna.webp", title: "WHEY PROTEIN GROWTH", description: "Whey protein Growth fornece proteínas para quem deseja hipertrofia e definição muscular.", price: 89.99 },
        { id: 23, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/107/produto-principal-v2.webp", title: "Multivitamínico (120 cáps)", description: "DOSE DIÁRIA DE MICRONUTRIENTES.", price: 49.99 },
        { id: 15, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/produto/layout/81/hiper-mass-growth-v2.webp", title: "Hiper Mass (1kg)", description: "Grande concentração de energia para o corpo.", price: 74.99 },
        { id: 9, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_barra-de-prote-na-barrinha-de-prote-na-display-c-12-un-growth-supplements-2.webp", title: "Barra de Proteína (barrinha de proteína)", description: "Um alimento prático e saboroso para sua dieta!", price: 28.09 },
        { id: 12, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/produto/layout/82/hipercalorico-chocolate-growth-supplements-v2.webp", title: "(TOP) Hipercalórico (sabor chocolate)", description: "Amplie os resultados do seu treino.", price: 59.99 },
        { id: 6, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/2200/growth-whey-pronto-growth-supplements-v2.webp", title: "BEBIDA LÁCTEA UHT DE PROTEÍNAS", description: "Pronto para você tomar a qualquer hora do dia", price: 4.33 },
        { id: 21, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/112/oleo-de-peixe-ultra-75caps-growth-supplements-v2.webp", title: "Óleo de Peixe Ultra (75 softgel)", description: "Essencial para sua rotina pós-treino e imunidade.", price: 89.99 },
        { id: 25, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/1249/vitamina-c-tubo-deitado-v2.webp", title: "Vitamina C + Zinco", description: "A vitamina C é uma potente aliada da sua saúde.", price: 19.99 },
        { id: 5, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/imagem/m_barra-de-prote-na-com-recheio-display-c-12-un-growth-supplements.webp", title: "Barra de Proteína com recheio", description: "Barras de proteína para uma dietamais saudável", price: 44.23 },
        { id: 8, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/96/produto-principal-v2.webp", title: "Medium Whey Protein (1kg)", description: "Grande concentração de proteína, fonte de ferro e cálcio.", price: 51.99 },
        { id: 24, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/111/oleo-de-peixe-growth-v3.webp", title: "Óleo de Peixe - Ômega 3", description: "Compacta e prática, material durável.", price: 29.99 },
        { id: 28, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/173/vitamina-c-120caps-growth-supplements-v2.webp", title: "Vitamina C (120 caps)", description: "Essencial para o equilíbrio das funções do organismo", price: 24.99 },
        { id: 3, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/1012/colagenohidrolisadonatural150g-growth-supplements-v3.webp", title: "Colágeno Hidrolisado", description: "Contribui para a firmeza da pele.", price: 24.59 },
        { id: 18, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/1/batata-doce-em-po-growth-supplements.png", title: "100% Batata Doce em pó (sabor natural) (1kg)", description: "MUITO MAIS ENERGIA E PROTEÍNA PARA O SEU DIA A DIA!.", price: 64.99 },
        { id: 30, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/61/cloreto-de-magnesio-120-comp.webp", title: "Cloreto de Magnésio 120 comp", description: "Mantenha o corpo saudável para realização das atividades do dia a dia.", price: 19.99 },
        { id: 11, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/produto/layout/74/dextrose-1kg-growth-supplements-v2.webp", title: "Dextrose (1kg)", description: "Areia branca, águas cristalinas, cenário paradisíaco.", price: 49.99 },
        { id: 19, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/produto/layout/1177/big-mass-growth-supplements-v5.webp", title: "Big Mass Pro Hipercalórico 3kg ", description: "Mais hipertrofia e massa muscular.", price: 24.99 },
        { id: 16, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/produto/layout/1501/d-ribose-growth-supplements-v2.webp", title: "D-RIBOSE 300GR", description: "auxiliam na recuperação da função muscular.", price: 54.99 },
        { id: 14, idCategory: 2, image: "https://picsum.photos/id/13/200/200", title: "Campo Florido", description: "Cores vibrantes, beleza natural e ar fresco.", price: 29.99 },
        { id: 29, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/200/zma-120-caps-growth-supplements-v2.webp", title: "ZMA (120 caps)", description: "ZMA: Elementos que auxiliam na rotina do nosso organismo.", price: 22.19 },
        { id: 1, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/1082/colageno-2-40mg-60caps-growth-supplements-v3.webp", title: "Colágeno Tipo 2", description: "FONTE DE COLÁGENO TIPO 2 NÃO DESNATURADO.", price: 51.02 },
        { id: 2, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/6/albumina-growth-mockup.png", title: "Albumina 1kg", description: "PROTEÍNA DA CLARA DO OVO", price: 54.33 },
        { id: 7, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/11/img-product-v2.webp", title: "Basic Whey Protein (1kg)", description: "Proteinas essenciais de alta qualidade ", price: 41.22 },
        { id: 17, idCategory: 2, image: "https://www.gsuplementos.com.br/upload/produto/layout/114/palatinose-1kg-growth-supplements-v2.webp", title: "Palatinose 1kg ", description: "Fonte de energia.", price: 44.99 },
        { id: 13, idCategory: 2, image: "https://picsum.photos/id/12/200/200", title: "Lago Sereno", description: "Água calma, tranquilidade e paz de espírito.", price: 39.99 },
        { id: 22, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/1497/nac-60caps-growth-supplements-v2.webp", title: "NAC (N-ACETIL L-CISTEÍNA)", description: "Suplemento alimentar natural.", price: 59.99 },
        { id: 10, idCategory: 1, image: "https://www.gsuplementos.com.br/upload/produto/layout/1674/barrinha-wafer-protein-100g-growth-supplements-v7.webp", title: "Barra Wafer Protein", description: "Na hora do Break! Barrinha de Wafer", price: 4.99 },
        { id: 26, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/118/polivitaminico-120comp-growth-supplements-v2.webp", title: "Polivitamínico Mastigável 120Comp", description: "Com 16 nutrientes fundamentais para o bom funcionamento do organismo.", price: 23.11 },
        { id: 27, idCategory: 3, image: "https://www.gsuplementos.com.br/upload/produto/layout/1767/gummy-hair-skin-30un-growth-supplements-v5.webp", title: "HAIR SKIN GUMMY 30UN", description: "PODEROSA COMBINAÇÃO DE NUTRIENTES PARA SAÚDE DA PELE E DO CABELO.", price: 36.31 },
        { id: 20, idCategory: 2, image: "https://picsum.photos/id/19/200/200", title: "Campos de Trigo", description: "Cenas pastorais tranquilas, brisa suave.", price: 31.99 },
        { id: 31, idCategory: 5, image: "https://www.gsuplementos.com.br/upload/produto/layout/72/produto1-mono-250.webp", title: "Creatina Monohidratada 250g", description: "Mais auxílio para seu crescimento muscular", price: 71.29 },
        { id: 32, idCategory: 5, image: "https://www.gsuplementos.com.br/upload/produto/layout/70/produto1-creapure250.webp", title: "CREATINA (250g) Creapure®", description: "Cenas pastorais tranquilas, brisa suave.", price: 31.99 },
        { id: 33, idCategory: 5, image: "https://www.gsuplementos.com.br/upload/produto/layout/71/creatina-monohidratada-100g-growth-supplements-v2.webp", title: "Creatina Monohidratada 100g", description: "A mais alta tecnologia para impulsionar seus resultados!", price: 41.50 },
        { id: 34, idCategory: 5, image: "https://www.gsuplementos.com.br/upload/produto/layout/1500/haze-hardcore-pre-workout-growth-v3.webp", title: "Pré-Treino Haze Hardcore 300g", description: "Suplemento para quem treina com alta intensidade ou alto volume.", price: 102.49 },
        { id: 35, idCategory: 5, image: "https://www.gsuplementos.com.br/upload/produto/layout/29/blendvegan-1kg-growth-supplements.webp", title: "Blend Vegan - Growth Supplements", description: "Fonte de proteínas para veganos e intolerantes à lactose", price: 75.99 },
        { id: 36, idCategory: 5, image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/1343/oleo-de-coco-spray.png", title: "Óleo de Coco Spray 100ml", description: "Seu aliado no preparo de receitas ainda mais saudáveis.", price: 17.15 },
        { id: 37, idCategory: 4, image: "https://www.gsuplementos.com.br/upload/produto/layout/72/produto1-mono-250.webp", title: "Creatina Monohidratada 250g", description: "Mais auxílio para seu crescimento muscular", price: 71.29 },
        { id: 38, idCategory: 4, image: "https://www.gsuplementos.com.br/upload/produto/layout/70/produto1-creapure250.webp", title: "CREATINA (250g) Creapure®", description: "Cenas pastorais tranquilas, brisa suave.", price: 31.99 },
        { id: 39, idCategory: 4, image: "https://www.gsuplementos.com.br/upload/produto/layout/71/creatina-monohidratada-100g-growth-supplements-v2.webp", title: "Creatina Monohidratada 100g", description: "A mais alta tecnologia para impulsionar seus resultados!", price: 41.50 },
        { id: 40, idCategory: 4, image: "https://www.gsuplementos.com.br/upload/produto/layout/1500/haze-hardcore-pre-workout-growth-v3.webp", title: "Pré-Treino Haze Hardcore 300g", description: "Suplemento para quem treina com alta intensidade ou alto volume.", price: 102.49 },
        { id: 41, idCategory: 4, image: "https://www.gsuplementos.com.br/upload/produto/layout/29/blendvegan-1kg-growth-supplements.webp", title: "Blend Vegan - Growth Supplements", description: "Fonte de proteínas para veganos e intolerantes à lactose", price: 75.99 },
        { id: 42, idCategory: 4, image: "https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/1343/oleo-de-coco-spray.png", title: "Óleo de Coco Spray 100ml", description: "Seu aliado no preparo de receitas ainda mais saudáveis.", price: 17.15 },
        
    ]
}