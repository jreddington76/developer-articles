import React from 'react';

class PublicKeyToken extends React.Component {
    render() {
        return (
            <section id="publickey">
            <h2>Public Key Token</h2>
            <p>What is the role of public key token?
                
                The public key token is a small number which is a convenient "token" representing a public key. Public keys are quite long; the purpose of the public key token is to let you refer to keys without saying the whole key. Sort of the same way saying "The Lord of the Rings" is five words which represent a half-a-million-word novel. It would be rather inconvenient if every time you wanted to talk about it, you had to state those half-a-million words.
                
                Does it have any part in decrypting the signed hash?
                
                No. The public key token has no "information" in it. It's just a number that represents a public key. It is not itself a public key.
                
                why are there so many assemblies from Microsoft with the same public key token?
                
                Because they were all signed with the same private key -- Microsoft's private key -- and are therefore all verified with the same public key, and therefore all have the same public key token.</p>
        </section>
        );
    }
}

export default PublicKeyToken;