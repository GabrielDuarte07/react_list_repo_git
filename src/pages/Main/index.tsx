import { FaGithub, FaPlus } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

const Main = (): React.ReactElement => {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus repositorios
      </h1>
      <Form>
        <input type="text" placeholder="Adicionar Repositórios" />

        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
