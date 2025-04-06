export default function LoginForm() {
    return (
            <div className="hero grow bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Inicia sesión</h1>
                        <p className="py-6">
                            Inicia sesión con la cuenta de tu asociación para tener acceso al estado de tu membresía,
                            anuncios internos, reserva de salas o préstamo de recursos.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label htmlFor="email-input" className="fieldset-label">Correo electrónico</label>
                                <input id="email-input" type="email" className="input" placeholder="Correo electrónico"/>
                                <label htmlFor="password-input" className="fieldset-label">Contraseña</label>
                                <input id="password-input" type="password" className="input" placeholder="Contraseña"/>
                                <div><a className="link link-hover">¿Olvidó su contraseña?</a></div>
                                <button className="btn btn-primary mt-4">Iniciar sesión</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
        </div>
    )
}