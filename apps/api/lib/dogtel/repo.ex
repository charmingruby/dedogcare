defmodule Dogtel.Repo do
  use Ecto.Repo,
    otp_app: :dogtel,
    adapter: Ecto.Adapters.Postgres
end
