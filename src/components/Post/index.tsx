// Post.tsx
import { PostContainer } from "./styles";
import { Traducao } from "../../scripts/arey";

interface PostProps {
    areys: Traducao[];
}

const Post = ({ areys }: PostProps) => {
    if (areys.length === 0) {
        return null;
    }

    return (

        <PostContainer>
            {areys.map((traducao, index) => (
                <div key={index}>
                    <p>Palavra: {traducao.palavra}</p>
                    <p>Tradução Tupi: {traducao.traducaoTupi}</p>
                    <p>Tradução Yanomami: {traducao.traducaoYanomami}</p>
                    <p>Tradução Xavante: {traducao.traducaoXavante}</p>
                </div>
            ))}
        </PostContainer>

    );
};

export default Post;
