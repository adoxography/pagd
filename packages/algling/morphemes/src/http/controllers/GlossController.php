<?php

namespace Algling\Morphemes\Http\Controllers;

use Illuminate\Http\Request;
use Algling\Morphemes\Models\Gloss;
use App\Http\Controllers\ClosedController;

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

    public function create()
    {
        return parent::createItem(new Gloss());
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

    public function store(Request $request)
    {
        $item = Gloss::create($request->all());

        return parent::storeItem($item);
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
