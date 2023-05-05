import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Container } from "./styles";
import { TypeRepositorio } from "../../types/types";

const Repositorio = (): ReactElement => {
  const { name } = useParams();
  const [repositorio, setRepositorio] = useState<TypeRepositorio | null>();
  const [issues, setIssues] = useState({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      const [responseData, responseIssues] = await Promise.all([
        api.get(`/repos/${name}`),
        api.get(`/repos/${name}/issues`, {
          params: {
            per_page: 5,
            state: "open",
          },
        }),
      ]);

      setRepositorio(responseData.data);
      setIssues(responseIssues.data);
      setLoading(false);
    }

    load();
  }, [name]);
  return (
    <Container>
      <h1></h1>
    </Container>
  );
};

export default Repositorio;
