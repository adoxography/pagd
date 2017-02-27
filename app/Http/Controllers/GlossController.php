<?php

namespace App\Http\Controllers;

use App\Gloss;
use Illuminate\Http\Request;

/**
 * HTTP Controller for glosses
 */
class GlossController extends ClosedController
{
    /**
     * Show the list of glosses
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->setItems(Gloss::orderBy('abv')->get());
        $this->setModel('glosses');
        return parent::index();
    }

    /**
     * Show the gloss details.
     *
     * @param \App\Gloss The gloss
     * @return \Illuminate\Http\Response
     */
    public function show(Gloss $gloss)
    {
        return parent::showItem($gloss);
    }

    /**
     * Show the gloss edit form
     *
     * @param \App\Gloss The gloss
     * @return \Illuminate\Http\Response
     */
    public function edit(Gloss $gloss)
    {
        return parent::editItem($gloss);
    }

    /**
     * Update a gloss
     *
     * @param \Illuminate\Http\Request
     * @param \App\Gloss The gloss
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gloss $gloss)
    {
        return parent::updateItem($request, $gloss);
    }

    /**
     * Destroy a gloss
     *
     * @param \App\Gloss The gloss
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gloss $gloss)
    {
        return parent::destroyItem($gloss);
    }
}
