import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
} from "./styles";
import { TypeRepositorio, TypeIssue } from "../../types/types";

const Repositorio = (): ReactElement => {
  const { name } = useParams();
  const [repositorio, setRepositorio] = useState<TypeRepositorio | null>(null);
  const [issues, setIssues] = useState<TypeIssue[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

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

  useEffect(() => {
    async function loadIssues() {
      const response = await api.get(`/repos/${name}/issues`, {
        params: {
          state: "open",
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    }
    loadIssues();
  }, [page, name]);

  const handlePage = (action: string): void => {
    setPage((prev) => (action === "prev" ? prev - 1 : prev + 1));
  };

  if (loading) {
    return (
      <Loading>
        <h1>carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={35} />
      </BackButton>
      <Owner>
        {repositorio && (
          <>
            <img
              src={repositorio.owner.avatar_url}
              alt={repositorio.owner.login}
            />
            <h1>{repositorio.name}</h1>
            <p>{repositorio.description}</p>
          </>
        )}
      </Owner>
      <IssuesList>
        {issues &&
          issues.map((i) => (
            <li key={i.id}>
              <img src={i.user.avatar_url} alt={i.user.login} />
              <div>
                <strong>
                  <a href={i.html_url}>{i.title}</a>
                  {i.labels.length > 0 &&
                    i.labels.map((label) => (
                      <span key={label.id}>{label.name}</span>
                    ))}
                </strong>

                <p>{i.user.login}</p>
              </div>
            </li>
          ))}
      </IssuesList>
      <PageActions>
        <button
          type="button"
          onClick={() => handlePage("prev")}
          disabled={page < 2 ? true : false}
        >
          Voltar
        </button>

        <button type="button" onClick={() => handlePage("next")}>
          Proxima
        </button>
      </PageActions>
    </Container>
  );
};

export default Repositorio;
